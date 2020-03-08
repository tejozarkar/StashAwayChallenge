import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../model/Restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public restaurants = [];
  public filteredRestaurants = [];
  public searchQuery: string;

  constructor(private readonly restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants()
      .subscribe((restaurants: Restaurant[]) => {
        restaurants.forEach(restaurant => this.restaurants.push(
          new Restaurant(restaurant.Brand, restaurant.Variety, restaurant.Style,
            restaurant.Country, restaurant.Stars, restaurant['Top Ten'])
        ));
        this.filteredRestaurants = this.restaurants;
        this.getRestaurantByYear();
      });
  }

  public getRestaurantByYear() {
    let restaurantMapByYear = new Map<Number, Restaurant[]>();
    this.restaurants.forEach(restaurant => {
      let year = restaurant.getYear();
      if (year) {
        let previousRestaurant = restaurantMapByYear.get(year);
        if (previousRestaurant) {
          previousRestaurant.push(restaurant);
        } else {
          previousRestaurant = [];
        }
        restaurantMapByYear.set(year, previousRestaurant);
      }
    });

    return restaurantMapByYear;
  }

  public filter(filterBy) {
    this.filteredRestaurants = this.restaurants.filter(restaurant => {
      let country = true;
      let brand = true;
      if (filterBy.countries && filterBy.countries.length) {
        country = filterBy.countries.includes(restaurant.Country);
      }
      if (filterBy.brands && filterBy.brands.length) {
        brand = filterBy.brands.includes(restaurant.Brand);
      }
      return country && brand;
    });
  }

}

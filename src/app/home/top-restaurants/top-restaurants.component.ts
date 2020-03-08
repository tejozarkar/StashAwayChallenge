import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/model/Restaurant';

@Component({
  selector: 'app-top-restaurants',
  templateUrl: './top-restaurants.component.html',
  styleUrls: ['./top-restaurants.component.scss']
})
export class TopRestaurantsComponent implements OnInit {

  @Input() restaurantsByYear;

  public selectedYear;
  public years;
  public selectedRestaurants;

  constructor() { }

  ngOnInit() {
    this.years = [...this.restaurantsByYear.keys()].sort((a, b) => b - a);
    this.selectedYear = this.years[0];
    this.selectYear();
  }

  selectYear() {
    this.selectedRestaurants = this.restaurantsByYear.get(parseInt(this.selectedYear)).sort((a,b)=> a.getRank()-b.getRank());
  }

}

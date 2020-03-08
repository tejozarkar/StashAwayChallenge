import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from 'src/app/model/Restaurant';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() restaurants: Restaurant[];
  @Output() filter = new EventEmitter();

  public faArrow = faSortUp;

  public countries;
  public selectedCountries;

  public brands;
  public selectedBrands;

  public styles;
  public selectedStyles;

  public filterBy = { countries: [], brands: [], styles: [] }

  public showFilter = true;

  constructor() { }

  ngOnInit() {
    this.getCountries();
    this.getBrands();
    this.getStyles();
  }

  getCountries() {
    let countries = this.restaurants.map(restaurant => restaurant.Country);
    countries = countries.filter(this.onlyUnique)
    this.countries = countries;
  }

  getBrands() {
    let brands = this.restaurants.map(restaurant => restaurant.Brand);
    brands = brands.filter(this.onlyUnique)
    this.brands = brands;
  }

  getStyles() {
    let styles = this.restaurants.filter(restaurant => restaurant.Style).map(restaurant => restaurant.Style);
    styles = styles.filter(this.onlyUnique)
    this.styles = styles;
  }

  onFilterChange() {
    this.filterBy.countries = this.selectedCountries;
    this.filterBy.brands = this.selectedBrands;
    this.filterBy.styles = this.selectedStyles;
    this.filter.emit(this.filterBy);
  }

  public toggleFilter() {
    this.showFilter = !this.showFilter;
    if (this.showFilter) {
      this.faArrow = faSortUp;
    } else {
      this.faArrow = faSortDown;
    }
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


}

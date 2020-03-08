import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/model/Restaurant';
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  public faStar = faStar;
  public faMapMarker = faMapMarkerAlt;

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}

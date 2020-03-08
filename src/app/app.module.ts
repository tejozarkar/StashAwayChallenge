import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter';
import { RestaurantCardComponent } from './home/restaurant-card/restaurant-card.component';
import { HeaderComponent } from './home/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopRestaurantsComponent } from './home/top-restaurants/top-restaurants.component';
import { FilterComponent } from './home/filter/filter.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    RestaurantCardComponent,
    HeaderComponent,
    TopRestaurantsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

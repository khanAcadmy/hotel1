import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FoodAndBaverageComponent } from './food-and-baverage/food-and-baverage.component';
import { RestaurantComponent } from './food-and-baverage/restaurant/restaurant.component';
import { OffersComponent } from './offers/offers.component';
import { BarComponent } from './food-and-baverage/bar/bar.component';
@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    BirthdayComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    FoodAndBaverageComponent,
    RestaurantComponent,
    OffersComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

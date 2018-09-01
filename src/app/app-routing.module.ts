import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { BirthdayComponent } from './birthday/birthday.component';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FoodAndBaverageComponent } from './food-and-baverage/food-and-baverage.component';
import { RestaurantComponent } from './food-and-baverage/restaurant/restaurant.component';
import {OffersComponent } from './offers/offers.component';
import { BarComponent } from './food-and-baverage/bar/bar.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: 'accomodation', component:  AccomodationComponent},
  { path: 'birthday', component: BirthdayComponent},
  { path: 'food-and-baverage', component: FoodAndBaverageComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'bar', component: BarComponent},
  { path: 'restaurant', component: RestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

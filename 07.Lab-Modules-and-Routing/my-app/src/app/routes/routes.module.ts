import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from "../components/home/home.component";
import {CarsComponent} from "../components/cars/cars.component";
import {OwnersComponent} from "../components/owners/owners.component";
import {CarComponent} from "../components/car/car.component";
import {OwnerComponent} from "../components/owner/owner.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'owners', component: OwnersComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'car/:id', component: CarComponent},
  {path: 'owner/:name', component: OwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
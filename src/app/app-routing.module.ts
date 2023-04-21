import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ MakeBookingComponent } from './make-booking/make-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { StoresComponent } from './stores/stores.component';
import { AppointmentDetailsComponent } from './make-booking/appointment-details/appointment-details.component';
import { AppointmentScreenComponent } from './appointment-screen/appointment-screen.component';
import{HttpClientModule}from '@angular/common/http';

const routes: Routes = [
  {
  component:MakeBookingComponent,
  path:'make'
},
{
  component:AppointmentScreenComponent,
  path:'time'
},
{
  component:ViewBookingComponent,
  path:'view'
},
{
  component:UpdateBookingComponent,
  path:'update'
},
{
  component:StoresComponent,
  path:'stores'
},
{
  component:AppointmentDetailsComponent,
  path:'details'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

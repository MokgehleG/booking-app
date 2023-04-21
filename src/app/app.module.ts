import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeBookingComponent } from './make-booking/make-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { StoresComponent } from './stores/stores.component';
import { AppointmentDetailsComponent } from './make-booking/appointment-details/appointment-details.component';
import { AppointmentScreenComponent } from './appointment-screen/appointment-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import{MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { DateTime } from 'luxon';





@NgModule({
  declarations: [
    AppComponent,
    MakeBookingComponent,
    ViewBookingComponent,
    UpdateBookingComponent,
    StoresComponent,
    AppointmentDetailsComponent,
    AppointmentScreenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    NgToastModule,
    NgConfirmModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

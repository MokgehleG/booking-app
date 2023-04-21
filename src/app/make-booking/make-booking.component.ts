
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, FormBuilder, EmailValidator} from '@angular/forms';
import { BookingServiceService } from '../booking-service.service';
import { NgToastService } from 'ng-angular-popup';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {
public Provinces =["Gauteng","North West","Limpopo","KZN","Free State","Mpumalanga","Eastern Cape","Northen Cape","Western Cape"];
 
 public bookingform!:FormGroup;

 constructor(private fb:FormBuilder,private api:BookingServiceService,private Service:NgToastService)
 {

 }
  ngOnInit(): void {
    this.bookingform = this.fb.group(
      {
       FirstName:[''],
       LastName:[''],
       Email:[''],
       Cell:[''],
       Province:['']
      }
                                   );
     this.Proceed();
                   }
 Proceed()
 {
            console.log(this.bookingform.value);
 }
                   } 
import { Component,AfterViewInit,ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { user } from '../model/user.model';
import { MatSort } from '@angular/material/sort';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
public datasource!:MatTableDataSource<user>;
public users!:user[];

@ViewChild(MatPaginator) Paginator!:MatPaginator;
@ViewChild(MatSort) Sort!:MatSort;
displayedColumns:string[]=['id','FirstName','Email','Cell','Date','Store','Status','Action'];


constructor(private api:BookingServiceService){

}
  ngOnInit(): void {
  this.getUsers();
  }
getUsers()
{
this.api.getBookedClient().subscribe(res=>{
  this.users= res;
  this.datasource = new MatTableDataSource(this.users);
  this.datasource.paginator = this.Paginator;
  this.datasource.sort=this.Sort;
})
}

applyFilter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.datasource.filter = filterValue.trim().toLowerCase();

  if (this.datasource.paginator) {
    this.datasource.paginator.firstPage();
  }
        }


}
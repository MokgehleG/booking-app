import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {user} from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  private baseUrl:string = 'http://localhost:3000/user';

  constructor(private http:HttpClient) { }
  postBooking(bookObj:user)
     {
      return this.http.post<user>('${this.baseUrl}',bookObj);
     }
  getBookedClient()
     {
      return this.http.get<user[]>('${this.baseUrl}');
     }
  updateBooking(bookObj:user,id:number)
     {
      return this.http.put<user[]>('${this.baseUrl}/${id}',bookObj);
     }
  deleteBooking(id:number)
     {
      return this.http.delete<user[]>('${this.baseUrl}/${id}');
     }
}

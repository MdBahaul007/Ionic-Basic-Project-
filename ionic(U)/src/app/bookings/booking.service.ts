/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import {Booking} from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[]=[
    {
      id: 'xyz',
      placeTitle: 'Hotel Taj MUmbai',
      guestNumber: 5,
      userId:'abc',
      placeID:'p1'
    }
  ];

get bookings(){
  return [...this._bookings];
}


  constructor() { }
}

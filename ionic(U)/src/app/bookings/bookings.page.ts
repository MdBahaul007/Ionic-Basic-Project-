import { Component, OnInit } from '@angular/core';
import {BookingService} from './booking.service';
import {Booking} from './booking.model'
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  //to show dummy booking of service page
  loadedBooking: Booking[];


  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBooking=this.bookingService.bookings;
    // now we will output these booking in bookings page.html
  }

  onCancelBooking(offerID: string,slidingEl: IonItemSliding){
    slidingEl.close();
  }

}

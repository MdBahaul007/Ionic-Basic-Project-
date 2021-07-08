import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss'],
})
export class OfferListComponent implements OnInit {
  @Input () offer: Place;

  constructor() { }

  ngOnInit() {}

  getDummyDate(){
    return new Date();
  }

}

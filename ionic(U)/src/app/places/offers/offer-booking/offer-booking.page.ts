import { Component, OnInit } from '@angular/core';
import {Place} from '../../place.model';
import {ActivatedRoute} from '@angular/router'
import  {NavController} from '@ionic/angular'
import {PlacesService} from '../../places.service';
@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {
  place:Place;

  constructor(private route:ActivatedRoute, private navCtrl:NavController, private placeService:PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offer');
        return;

      }
      this.place=this.placeService.getPlace(paramMap.get('placeId'));

    });
  }

}

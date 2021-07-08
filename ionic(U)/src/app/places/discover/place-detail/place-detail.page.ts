import { Component, OnInit } from '@angular/core';
// import {AcRouter} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {NavController,ModalController} from '@ionic/angular'
import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component'
import {PlacesService} from '../../places.service'
import {Place} from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place:Place;

  constructor(private router:ActivatedRoute, private nav:NavController, private modalCtrl:ModalController,private placeService:PlacesService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.nav.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }




  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover');
    //we want when we click on book button it go to discover page
    // this.nav.navigateBack('/places/tabs/discover');

    //when we click on book in page-detail page, we want go create-booking model which we have created in bookings folder as privoulsy we were only going to discovwer page usinng this.nav.navigateBack('/places/tabs/discover');
    this.modalCtrl
    .create({
      component:CreateBookingComponent,
      componentProps:{selectedPlace: this.place}
    })
    .then(modelEl =>{
      modelEl.present();

    })

  }

}
// function paraamMap(paraamMap: any): any {
//   throw new Error('Function not implemented.');
// }


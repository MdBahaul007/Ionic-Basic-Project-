import { Component, OnInit } from '@angular/core';
import  {PlacesService} from '../places.service';
import {Place} from '../place.model';
import {SegmentChangeEventDetail} from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: any=Place;

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces=this.placeService.places;
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);

  }

}

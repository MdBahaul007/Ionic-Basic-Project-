import { Injectable } from '@angular/core';
import {Place} from './place.model';
// import {Offer} from  './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[]=[
    new Place('p1',
    'Hotel Taj Mahel',
    'One of the India oldest hotel situated in Mumbai infront of GateWay of India',
    'https://images.unsplash.com/photo-1601780298271-b04074de49df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    150),

    new Place('p2',
    'Maldiives',
    'Best Beaches in the world are situated here and of the best romantic place.',
    'https://images.unsplash.com/photo-1537162998323-3d3675e0e87c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80',
    200),

    new Place('p3',
    'Paris',
    'Capital of Franch and one of the most butiful city in world and a place where Effil Tower is located.',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    310)

  ];
  // private _offer:Offer[]=[
  //   new Offer('o1',
  //   'Get 50% discount',
  //   'Get maximum 50% discount on the return tickets',
  //   'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //   2),

  //   new Offer('o2',
  //   'Get 100% discount',
  //   'Get maximum 100% discount on first booking',
  //   'https://images.unsplash.com/photo-1581298253744-fb9993613c73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fDEwMCUyNSUyMGRpc2NvdW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //   3),

  //   new Offer('o3',
  //   'Unbelivable discount on hotel bookings.',
  //   'Get upto 70% discount on hotel bookings across India',
  //   'https://images.unsplash.com/photo-1621105624953-f91cdc814587?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwYm9va2luZyUyMGRpc2NvdW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //   5),
  // ]
  get places(){
    return [...this._places];
  }
  // get offers(){
  //   return[...this._offer];
  // }

  constructor() { }

  getPlace(id:string){
    return {...this._places.find(p => p.id===id)};
  }

}


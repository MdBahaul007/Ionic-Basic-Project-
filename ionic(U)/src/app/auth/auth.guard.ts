import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  //first created the constructor
  constructor(private authservice:AuthService,private router:Router){}


  //bring mouse on can load can press cntrl + mouse button and copy thecan load defination which is below from opened file.
  canLoad(
    route: Route,
    segments: UrlSegment[]
    ): Observable <boolean> | Promise<boolean> | boolean{

    if(!this.authservice.userIsAuthenticated){
      this.router.navigateByUrl('/auth');

    }
    return this.authservice.userIsAuthenticated
  }


}
// finally need to attch the gaurd in app.routing module

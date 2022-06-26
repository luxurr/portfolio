import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {
  public token: boolean = false;

  constructor( private _user:UserService,private router:Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.check(next, state);
  }

  private check( route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
    this.token = this._user.checkAuth();
    if(this.token){
      return true;
    } else {
      this.router.navigate(['']);
    }
    return this.token;
  }

}

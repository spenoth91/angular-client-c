import {Component} from '@angular/core';
import {AccountService} from './account/component/services/account.service';
import { PrimeNGConfig } from 'primeng/api';
import {User} from './users/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = {} as User;

  constructor(private auth: AccountService,private primengConfig: PrimeNGConfig) {}


  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.primengConfig.ripple = true;
  }

  public isLoggedIn() {
    return this.auth.isLoggedIn();
  }
  public isAdmin(){
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if((this.user.role)==1){
      return true;
    }
     return false;
  }
  public logout() {
    this.auth.logout();
  }}

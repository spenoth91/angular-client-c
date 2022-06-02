import {Component} from '@angular/core';
import {AccountService} from './account/component/services/account.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AccountService,private primengConfig: PrimeNGConfig) {}

  public isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  public logout() {
    this.auth.logout();
  }}

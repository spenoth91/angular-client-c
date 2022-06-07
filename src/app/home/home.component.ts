import { Component, OnInit } from '@angular/core';
import {User} from '../users/models/user.model';
import {UserService} from '../users/services/user.service';
import {Subscription} from 'rxjs';
import {AccountService} from '../account/component/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {} as User;
  private subscription: Subscription;

  constructor(private userService: UserService,
              private auth: AccountService) { }

  ngOnInit(): void {
    // this.user.firstName = <string>localStorage.getItem('firstName');
    // this.user.lastName = <string>localStorage.getItem('lastName');
      this.user = JSON.parse(sessionStorage.getItem('user'));

  }
  public isLoggedIn() {
    return this.auth.isLoggedIn();
  }
}

import { Component, OnInit } from '@angular/core';
import {User} from '../users/models/user.model';
import {UserService} from '../users/services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {} as User;
  private subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.user.firstName = <string>localStorage.getItem('firstName');
    // this.user.lastName = <string>localStorage.getItem('lastName');
  }


}

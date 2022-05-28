import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Subscription} from 'rxjs';
import {Stuff} from '../../models/stuff.model';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit {
  private subscription: Subscription;
  myStuff: Stuff[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.getMyStuff().subscribe(data => this.myStuff = data);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from '../services/account.service';
import {UserService} from '../../../users/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})export class LoginComponent implements OnInit {
  public loginValid = true;
  public email = '';
  public password = '';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.loginValid = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.accountService.login(this.f.email.value, this.f.password.value)
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['/']);
          this.loginValid = true;

          this.userService.getUserbyEmail(this.f.email.value)
            .subscribe((user)=>{
              console.log(user);
              sessionStorage.setItem('user',JSON.stringify(user));
              console.log(JSON.stringify(user));
            });
        }
        this.loginValid = false;
      });
  }
}

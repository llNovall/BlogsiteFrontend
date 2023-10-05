import { Component, OnInit } from '@angular/core';
import { LoginCredential } from 'src/app/models/dashboard/login-credential';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from 'src/app/models/dashboard/login-response';
import { UserManagerService } from 'src/app/services/user-manager.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  isLoginFailed : boolean = false;

  loginCredentials : LoginCredential = { username : "", password : ""};
  constructor(private http : HttpClient, private userManagerService : UserManagerService)
  {

  }
  ngOnInit(): void {
    this.userManagerService.isUserLoggedIn$.subscribe(c=> this.isLoginFailed = c);
  }

  login(form: NgForm){
    if(form.valid){
      this.userManagerService.loginUser(this.loginCredentials);
    }
  }
}

import { Injectable } from '@angular/core';
import { LoginCredential } from '../models/dashboard/login-credential';
import { LoginResponse } from '../models/dashboard/login-response';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  readonly _baseUrl = environment.API_URL + '/Accounts';
  
  isUserLoggedIn: boolean = false;
  isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isUserLoggedIn);

  constructor(private http: HttpClient, private router : Router) 
  {
  }

  loginUser(loginCredential : LoginCredential){
    this.http.post<LoginResponse>(this._baseUrl + "/Login", loginCredential, {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }).subscribe({
      next: (response : LoginResponse) => {
        localStorage.setItem("token", response.token);
        this.isUserLoggedIn = true;
        this.isUserLoggedIn$.next(this.isUserLoggedIn);
        this.router.navigate(['dashboard']);
      },
      error: (err: HttpErrorResponse) => 
      { 
        this.isUserLoggedIn = false; 
        this.isUserLoggedIn$.next(this.isUserLoggedIn);
      }
    });
  }

  logoutUser(){
    localStorage.removeItem("token");
    this.isUserLoggedIn = false;
    this.isUserLoggedIn$.next(this.isUserLoggedIn);
  }
}

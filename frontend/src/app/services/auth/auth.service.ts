import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private isLoggedSubject: BehaviorSubject<boolean>;
  
  constructor(private http: HttpClient) {
    console.log('Creando auth service');
    
    this.isLoggedSubject = new BehaviorSubject(false);
    

  }
  ngOnDestroy(): void {
    localStorage.setItem("isLogged", JSON.stringify(this.isLoggedSubject.getValue()));
  }

  signUp(body) {
    return this.http.post(`${environment.AuthUrl}/signUp`, body, {
      withCredentials: true
    });
  }

  signIn(body) {
    console.log(environment.AuthUrl);
    return this.http.post(`${environment.AuthUrl}/signIn`, body, {
      withCredentials: true
    }).pipe(
      map( (data) => {
        this.checkUserLogged();
        return data;
      })
    )
  }

  checkUserLogged() {
    this.http.get(`${environment.AuthUrl}/isLogged`, {
      withCredentials: true
    }).subscribe(
      (data) => {
        console.log('NOT Error in reuqest logged');
        this.isLoggedSubject.next(true);
      },
      (err) => {
        console.log('Error in reuqest logged');
        this.isLoggedSubject.next(false);
      }
    ); 

  }

  isLogged() {
    return this.isLoggedSubject;
  }

  logout() {
    return this.http.get(`${environment.AuthUrl}/logout`, {
      withCredentials: true
    }).pipe(
      map( (data) => {
        this.checkUserLogged();
        return data;
      })
    )
  }
}

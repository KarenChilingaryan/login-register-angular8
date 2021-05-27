import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;
  constructor(private http: HttpClient) {
  }
  register(user: User): Observable<User> {
    console.log(user)
    return this.http.post<User>('http://localhost:3000/users', user);
  }
  login(user: User) {
    return this.http.get<User>('http://localhost:3000/users');
    // return this.http.post<{token: string}>('http://localhost:3000/users', user)
    //   .pipe(
    //     tap(
    //       ({token}) => {
    //         localStorage.setItem('auth-token', token);
    //         this.setToken(token);
    //       }
    //     )
    //   );
  }
  setToken(token: string) {
    this.token = token;
  }
  getToken(): string {
    return this.token;
  }
  isAuthenticated(): boolean {
    return !!this.token;
  }
  logout() {
    this.setToken(null);
    localStorage.clear();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  newUsers: string;
  constructor(private http: HttpClient) {
    this.newUsers = 'http://localhost:3000/users';
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.newUsers}/login`, body);
  }

  isAuthenticated(): Observable<any> {
    const token = localStorage.getItem('access_token');
    return this.http.get(`${this.newUsers}/authenticated`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}


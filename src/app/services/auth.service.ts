import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const data = JSON.stringify({ email, password });
    return this.http.post<AuthResponse>(baseUrl, data);
  }
}

interface AuthResponse {
  success: boolean;
  // other fields that the response may have
}



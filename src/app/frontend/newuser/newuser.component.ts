import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface User {
  "username": string
  "email": string
  "password": string
}


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent {

  users: User[] = []
  newUsers: User = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private http: HttpClient) { }

  register() {
    
    
  
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent {

  username!: string
  email!: string
  password!: string

  constructor(private http: HttpClient) { }

  register() {
    const username = this.username
    const email = this.email
    const password = this.password

    const newUser = { username, email, password }
    
  }

}

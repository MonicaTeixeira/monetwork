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
      this.http.post('http://localhost:3000/users', this.newUsers)
        .subscribe((response) => {
          console.log(response);
          // manipule a resposta do servidor, por exemplo, mostre uma mensagem ao usuário
        }, (error) => {
          console.error(error);
          // manipule o erro, por exemplo, mostre uma mensagem de erro ao usuário
        });
    }
    
  }



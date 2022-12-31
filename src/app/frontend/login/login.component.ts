import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PopupComponent } from '../popup/popup.component';

interface AuthResponse {
  success: boolean;
  // other fields that the response may have
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('popup_login') popup_login!: PopupComponent

  constructor(private authService: AuthService, private router: Router) {}  

  login(loginForm: NgForm) { 
    //verifica se o formulário de login é válido.
    if (loginForm.valid) {
      //email" e "password" são atribuídas com os valores digitados pelo usuário no formulário.
      const email = loginForm.value.email;
      const password = loginForm.value.password;
      this.authService.login(email, password).subscribe(response => { 
        console.log(response)
        if (response.success) {
          this.router.navigate(['/perfil']);
        } else {
          console.error('Error logging in');
          this.popup_login.openPopup()
        }
      });
    } else {
      console.log('Error submitting form');
    }
  }
}




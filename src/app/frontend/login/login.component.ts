import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(private authService: AuthService, private router: Router) {}  

  login(loginForm: NgForm) { 
    //verifica se o formulário de login é válido.
    if (loginForm.valid) {
      //email" e "password" são atribuídas com os valores digitados pelo usuário no formulário.
      const email = loginForm.value.email;
      const password = loginForm.value.password;
      this.authService.login(email, password).subscribe(response => { 
        if (response.success) {
          console.log('MENSAGEM SENDO ENVIADA')
          this.router.navigate(['/perfil']);
        } else {
          console.error('Error logging in');
        }
      });
    } else {
      console.log('Error submitting form');
    }
  }
}




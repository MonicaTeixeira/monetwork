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





// Enviar formulário para o servidor de autenticação
  //     this.http.post<AuthResponse>('/login', loginForm.value)
  //       .subscribe((response: AuthResponse) => {
  //         console.log('cliente enviando ao servidor')
  //         if (response.success) {
  //           // Armazene as informações de autenticação do usuário
  //           this.router.navigate(['/perfil']);
  //         } else {
  //           // Exiba uma mensagem de erro para o usuário
  //           alert('E-mail ou senha inválidos. Por favor, tente novamente.')
  //         }
  //       },
  //       error => {
  //         console.error('Erro ao fazer login:', error);
  //         // Exibir mensagem de erro para o usuário
  //         alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
  //       })
  //   } else {
  //     Exibir mensagem de er

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      // Enviar formulário para o servidor de autenticação
      const email = loginForm.value.email
      const password = loginForm.value.password
    } else {
      // Exibir mensagem de erro para o usuário
      alert('Por favor, preencha todos os campos obrigatórios e verifique se o formulário está correto.')
    }
  }
  

}

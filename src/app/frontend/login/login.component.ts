import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login(form: NgForm) {
    // Obter os valores de email e senha do formulário e enviar para o servidor de autenticação
    const email = form.value.email
    const password = form.value.password
    alert("Ola seja bem vindo!")
}

}

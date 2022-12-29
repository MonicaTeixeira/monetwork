import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './frontend/login/login.component';
import { PerfilComponent } from './frontend/perfil/perfil.component';
import { NewuserComponent } from './frontend/newuser/newuser.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    NewuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

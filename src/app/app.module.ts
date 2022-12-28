import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './frontend/login/login.component';
import { PerfilComponent } from './frontend/perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
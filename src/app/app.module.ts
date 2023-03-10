import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './frontend/login/login.component';
import { PerfilComponent } from './frontend/perfil/perfil.component';
import { NewuserComponent } from './frontend/newuser/newuser.component';
import { PopupComponent } from './frontend/popup/popup.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    NewuserComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MascotasListComponent } from './components/principal/mascotas-list/mascotas-list.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ChatAdopComponent } from './components/principal/chat-adop/chat-adop.component';
import { LoginComponent } from './components/login/login.component';

import { MascotaService } from './services/mascota.service';
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderPrincipalComponent } from './components/principal/header-principal/header-principal.component';
import { CreateMascotaComponent } from './components/principal/src/app/components/principal/create-mascota/create-mascota.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MascotasListComponent,
    FooterComponent,
    ChatAdopComponent,
    LoginComponent,
    RegistroComponent,
    HeaderPrincipalComponent,
    CreateMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ MascotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

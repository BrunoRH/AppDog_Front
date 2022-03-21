import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MascotasListComponent } from './components/principal/mascotas-list/mascotas-list.component';

import { ChatAdopComponent } from './components/principal/chat-adop/chat-adop.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CreateMascotaComponent } from './components/principal/src/app/components/principal/create-mascota/create-mascota.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: '' , component: HomeComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'registroUsuario' , component: RegistroComponent},
  { path: 'registroMascota' , component: CreateMascotaComponent},
  { path: 'chat' , component: ChatAdopComponent},
  { path: 'listado' , component: MascotasListComponent},
  { path: 'listado/:idUser' , component: MascotasListComponent},
  { path: 'listado/edit/:id/:nombre/:tipo' , component: MascotasListComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

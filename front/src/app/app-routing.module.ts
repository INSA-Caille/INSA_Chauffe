import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { routes } from './app.routes'; // Importation des routes
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes
  exports: [RouterModule]
})
export class AppRoutingModule { }

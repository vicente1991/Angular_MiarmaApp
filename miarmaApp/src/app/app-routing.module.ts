import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PublicacionListComponent } from './publicacion-list/publicacion-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: '/login'},
  {path: 'register',component: RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'posts',component:PublicacionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

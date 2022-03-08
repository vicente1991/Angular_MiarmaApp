import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from './user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.login(this.user).subscribe(loginResult => {
      alert(`Te has logueado y tu token es ${loginResult.token}`)
      localStorage.setItem('token',loginResult.token)
    });
  }
}

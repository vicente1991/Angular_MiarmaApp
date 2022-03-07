import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthLoginResponse } from '../model/interfaces/login.interface';
import { User } from '../login/user/user';
import { AuthRegisterDto } from '../register/dto/auth.dto';
import { AuthRegisterResponse } from '../register/dto/auth.interface';


const AUTH_BASE_URL = 'auth';
const DEFAULT_HEADERS= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`;

  constructor(private http: HttpClient) { }

  register(RegisterDto: AuthRegisterDto): Observable<AuthRegisterResponse> {
    let requestUrl = `${this.authBaseUrl}/register`;
    return this.http.post<AuthRegisterResponse>(requestUrl, RegisterDto, DEFAULT_HEADERS);
  }

  login(loginDto: User): Observable<AuthLoginResponse> {
    let requestUrl = `${this.authBaseUrl}/login`;
    return this.http.post<AuthLoginResponse>(requestUrl, loginDto, DEFAULT_HEADERS);
  }

  forgot() {
    let requestUrl = `${this.authBaseUrl}/forgot`;    
  }
}
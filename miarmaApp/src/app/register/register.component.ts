import { Component, OnInit } from '@angular/core';
import { AuthRegisterDto } from './dto/auth.dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  SERVER_URL = "http://localhost:8080/auth/register";
  uploadForm!: FormGroup;  

  RegisterDto = new AuthRegisterDto();

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,private authService: AuthService) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  doRegister(){
    this.authService.register(this.RegisterDto).subscribe(RegisterResult => {
      alert(`Te has registrado correctamente`)
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile')?.setValue(file);
    }
  }

 onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile')?.value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}

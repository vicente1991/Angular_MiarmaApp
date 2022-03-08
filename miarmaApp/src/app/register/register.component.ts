import { Component, OnInit } from '@angular/core';
import { AuthRegisterDto } from './dto/auth.dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from '../service/rest-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  SERVER_URL = "http://localhost:8080/auth/register";
  uploadForm!: FormGroup;
  public previsualizacion!: string;
  public loading!: boolean
  public archivos: any =[];
  RegisterDto = new AuthRegisterDto();

  constructor(private sanitizer: DomSanitizer,private rest: RestService,private formBuilder: FormBuilder, private http: HttpClient,private authService: AuthService) { }

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

  capturarFile(event:any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado)
    // 
    // console.log(event.target.files);

  }

  
  extraerBase64 = async ($event: any) => new Promise((resolve,reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
    return null
  })

  /**
   * Limpiar imagen
   */

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }

  /**
   * Subir archivo
   */

  subirArchivo(): any {
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: any) => {
        formularioDeDatos.append('files', archivo)
      })
      // formularioDeDatos.append('_id', 'MY_ID_123')
      this.rest.post(`http://localhost:8080/upload`, formularioDeDatos)
        .subscribe(res => {
          this.loading = false;
          console.log('Respuesta del servidor', res);

        }, () => {
          this.loading = false;
          alert('Error');
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);

    }
  }
  
  
  
}

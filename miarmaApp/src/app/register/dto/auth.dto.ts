export class AuthRegisterDto {
nombre:             string;
apellidos:          string;
nick:               string;
email:              string;
fechaNacimiento:    string;
visibilidadUsuario: boolean
avatar:             string;
password:           string;
password2:          string;

constructor(){
this.nombre = '',
this.apellidos = '',
this.nick = '',
this.email = '',
this.fechaNacimiento = '',
this.visibilidadUsuario = true,
this.avatar = '',
this.password = '',
this.password2 = ''
}
}

export interface PostResponse {
    id:               number;
    titulo:           string;
    texto:            string;
    file:             string;
    fechaPublicacion: string;
    visibilidad:      string;
    user:             User;
}

export interface User {
    id:                 string;
    nombre:             string;
    apellidos:          string;
    nick:               string;
    fechaNacimiento:    string;
    email:              string;
    avatar:             string;
    visibilidadUsuario: string;
}

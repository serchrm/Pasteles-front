import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }

  login(email:String,contrasenia:String):Observable<login>{
    return this.http.post<login>(`${this.Comuni.getURL()}empleados/login`,{nombre:email,pass:contrasenia})
  }
}

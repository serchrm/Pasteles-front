import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado, EmpleadoResponse, InfoResponse, Server } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }

  getEmpleado(jwt:String,empleado:String):Observable<EmpleadoResponse>{
    return this.http.get<EmpleadoResponse>(`${this.Comuni.getURL()}empleados/`);
  }

  getEmpleados(jwt:String):Observable<EmpleadoResponse>{
    return this.http.post<EmpleadoResponse>(`${this.Comuni.getURL()}empleados/`,{jwt:jwt});
  }

  getInfo(jwt:String):Observable<InfoResponse>{
    return this.http.post<InfoResponse>(`${this.Comuni.getURL()}empleados/obtenerInfo`,{jwt:jwt});
  }

  eliminerEmpleado(jwt:String,id:String):Observable<EmpleadoResponse>{
    return this.http.post<EmpleadoResponse>(`${this.Comuni.getURL()}empleados/eliminarEmpleado`,{jwt:jwt,nombre:id});
  }

  crearEmpleado(jwt:String,emp:Empleado,sueldo:Number):Observable<Server>{
    return this.http.post<Server>(`${this.Comuni.getURL()}empleados/crearEmpleado`,{jwt:jwt,nombre:emp.nombre,telefono:emp.telefono,puesto:emp.puesto,sueldo:sueldo,pass:emp.contrasenia});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor, ProveedorResponse, Server } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }
  
  getProveedores(jwt:String):Observable<ProveedorResponse>{
    return this.http.post<ProveedorResponse>(`${this.Comuni.getURL()}proveedores`,{jwt:jwt});
  }

  crearProveedor(jwt:String,provee:Proveedor):Observable<Server>{
    return this.http.post<Server>(`${this.Comuni.getURL()}proveedores/crearProveedor`,{jwt:jwt,empresa:provee.empresa,telefono:provee.telefono});
  }
}

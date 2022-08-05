import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compras, ComprasResponse, Server } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }

  getCompras(jwt:String):Observable<ComprasResponse>{
    return this.http.post<ComprasResponse>(`${this.Comuni.getURL()}compras`,{jwt:jwt});
  }

  crearCompra(jwt:String,comp:Compras):Observable<Server>{
    return this.http.post<Server>(`${this.Comuni.getURL()}compras/crearCompra`,{jwt:jwt,articulo:comp.articulo,cantidad:comp.cantidad,descripcion:comp.descripcion,fecha:comp.fecha,precio:comp.precio});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos, PedidosResponse, Server } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }

  getPedidos(jwt:String):Observable<PedidosResponse>{
    return this.http.post<PedidosResponse>(`${this.Comuni.getURL()}pedidos`,{jwt:jwt});
  }

  crearPedido(jwt:String,pedi:Pedidos):Observable<Server>{
    return this.http.post<Server>(`${this.Comuni.getURL()}pedidos/crearPedido`,{jwt:jwt,cliente:pedi.cliente,fechaHora:pedi.fechaHora,telefono:pedi.telefono,relleno:pedi.relleno,descripcion:pedi.descripcion});
  }
}

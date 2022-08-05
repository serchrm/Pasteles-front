import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ProductoResponse, Server } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }


  getProductos(jwt:String):Observable<ProductoResponse>{
    return this.http.post<ProductoResponse>(`${this.Comuni.getURL()}productos/`,{jwt:jwt});
  }

  crearProducto(jwt:String,produ:Producto):Observable<Server>{
    return this.http.post<Server>(`${this.Comuni.getURL()}productos/crearProducto`,{jwt:jwt,descripcion:produ.descripcion,tamanio:produ.tamanio,precio:produ.precio,sabor:produ.sabor});
  }
}



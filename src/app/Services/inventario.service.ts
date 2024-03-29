import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventarioResponse } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }

  getInventario(jwt:String):Observable<InventarioResponse>{
    return this.http.post<InventarioResponse>(`${this.Comuni.getURL()}inventario`,{jwt:jwt});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagosResponse } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }

  getPagos(jwt:String):Observable<PagosResponse>{
    return this.http.post<PagosResponse>(`${this.Comuni.getURL()}`,{jwt:jwt});
  }
}

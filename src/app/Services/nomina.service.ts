import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nomina, NominaResponse } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class NominaService {

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }

  getNominas(jwt:String):Observable<NominaResponse>{
    return this.http.post<NominaResponse>(`${this.Comuni.getURL()}nomina`,{jwt:jwt});
  }

  getNomina(jwt:String,id:String):Observable<NominaResponse>{
    return this.http.post<NominaResponse>(`${this.Comuni.getURL()}nomina/buscarNomina`,{jwt:jwt,id:id});
  }
}

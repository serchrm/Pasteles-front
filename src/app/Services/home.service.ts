import { Injectable } from '@angular/core';
import { ComunicacionService } from './comunicacion.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private Comuni:ComunicacionService) { }
}

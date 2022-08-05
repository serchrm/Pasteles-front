import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  url:String = "http://localhost:3000/";
  id:String='';
  agregar:Number=0;

  constructor() { }

  getURL(){
    return this.url;
  }
  
  setId(aux:String){
    this.id=aux;
  }

  getId(){
    return this.id;
  }

  setAgregar(aux:Number){
    this.agregar=aux;
  }

  getAgregar(){
    return this.agregar;
  }
}

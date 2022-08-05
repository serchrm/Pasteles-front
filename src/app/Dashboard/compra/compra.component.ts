import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compras } from 'src/app/Interfaces/interfaces';
import { CompraService } from 'src/app/Services/compra.service';
import { ComunicacionService } from 'src/app/Services/comunicacion.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  compras:Compras[]=[];
  jwt:string|null='';

  constructor(private ComprasHttp:CompraService,
              private Comuni:ComunicacionService,
              private router:Router) { }

  ngOnInit(): void {
    this.jwt=localStorage.getItem("jwt");
    this.getCompras();
  }

  getCompras(){
    this.ComprasHttp.getCompras((this.jwt?this.jwt:' ')).subscribe(resp=>{
      this.compras=resp.result;
      for(let i=0;i<this.compras.length;i++){
        let aux = this.compras[i].fecha.split(/T/);
        this.compras[i].fecha=aux[0];
      }
    })
  }

  agregar(){
    this.Comuni.setAgregar(4);
    this.router.navigate(['Dash/Agregar']);
  }

}

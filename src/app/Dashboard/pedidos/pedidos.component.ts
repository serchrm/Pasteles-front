import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedidos } from 'src/app/Interfaces/interfaces';
import { ComunicacionService } from 'src/app/Services/comunicacion.service';
import { PedidosService } from 'src/app/Services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos:Pedidos[]=[]
  jwt:string|null='';

  constructor(private PedidosHttp:PedidosService,
              private Comuni:ComunicacionService,
              private router:Router) { }

  ngOnInit(): void {
    this.jwt=localStorage.getItem("jwt");
    this.getPedidos();
  }

  getPedidos(){
    this.PedidosHttp.getPedidos((this.jwt?this.jwt:'')).subscribe(resp=>{
      this.pedidos=resp.result;
      for(let i=0;i<this.pedidos.length;i++){
        let aux = this.pedidos[i].fechaHora.split(/T/);
        this.pedidos[i].fechaHora=aux[0];
        let aux2 = aux[1].split(/:/);
        console.log(aux2[0]);
        console.log(aux2[1]);
        console.log(aux2[2]);
        this.pedidos[i].fechaHora+=`${' '+aux2[0]+':'+aux2[1]}`;
      }
    })
  }

  agregar(){
    this.Comuni.setAgregar(2);
    this.router.navigate(['Dash/Agregar']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/Interfaces/interfaces';
import { InventarioService } from 'src/app/Services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  inventario:Inventario[]=[];
  jwt:string|null='';
  constructor(private InventarioHttp:InventarioService) { }

  ngOnInit(): void {
    this.jwt=localStorage.getItem("jwt");
    this.getInventario();

  }

  getInventario(){
    this.InventarioHttp.getInventario((this.jwt?this.jwt:'')).subscribe(resp=>{
      this.inventario=resp.result;
      for(let i=0;i<this.inventario.length;i++){
        let aux = this.inventario[i].fechaCaducidad.split(/T/);
        this.inventario[i].fechaCaducidad=aux[0];
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/Interfaces/interfaces';
import { ComunicacionService } from 'src/app/Services/comunicacion.service';
import { ProveedoresService } from 'src/app/Services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores:Proveedor[]=[];
  jwt:string|null='';

  constructor(private ProveedoresHttp:ProveedoresService,
              private Comuni:ComunicacionService,
              private router:Router) { }

  ngOnInit(): void {
    this.jwt=localStorage.getItem("jwt");
    this.getProveedores();
  }

  getProveedores(){
    this.ProveedoresHttp.getProveedores((this.jwt?this.jwt:'')).subscribe(resp=>{
      this.proveedores=resp.result;
      
    })
  }

  agregar(){
    this.Comuni.setAgregar(5);
    this.router.navigate(['Dash/Agregar']);
  }
}

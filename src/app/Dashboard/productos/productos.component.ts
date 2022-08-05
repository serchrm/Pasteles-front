import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Interfaces/interfaces';
import { ComunicacionService } from 'src/app/Services/comunicacion.service';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[]=[];
  jwt:string|null='';

  constructor(private Comuni:ComunicacionService,
              private router:Router,
              private ProductosHttp:ProductosService) { }

  ngOnInit(): void {
    this.jwt=localStorage.getItem("jwt");
    this.getProductos();
  }

  agregar(){
    this.Comuni.setAgregar(3);
    this.router.navigate(['Dash/Agregar']);
  }

  getProductos(){
    this.ProductosHttp.getProductos((this.jwt?this.jwt:'')).subscribe(resp=>{
      this.productos=resp.result;
    })
  }

}

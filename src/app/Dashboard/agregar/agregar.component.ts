import { Component, OnInit } from '@angular/core';
import { doesNotThrow } from 'assert';
import { Compras, Empleado, Pedidos, Producto, Proveedor } from 'src/app/Interfaces/interfaces';
import { CompraService } from 'src/app/Services/compra.service';
import { ComunicacionService } from 'src/app/Services/comunicacion.service';
import { EmpleadosService } from 'src/app/Services/empleados.service';
import { PedidosService } from 'src/app/Services/pedidos.service';
import { ProductosService } from 'src/app/Services/productos.service';
import { ProveedoresService } from 'src/app/Services/proveedores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  emp:Empleado={
    nombre: '',
    puesto: '',
    contrasenia: '',
    telefono: '',
    _id: ''
  }

  pedi:Pedidos={
    cliente: '',
    fechaHora: '',
    telefono: '',
    relleno: '',
    descripcion: '',
    entregado: ''
  }

  produ:Producto={
    descripcion: '',
    precio: 0,
    tamanio: '',
    sabor: '',
    activo: ''
  }

  comp:Compras={
    articulo: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    fecha:''
  }

  provee:Proveedor={
    empresa: '',
    telefono: ''
  }
  sueldo:String='';

  jwt:string|null='';

  constructor(private Comuni:ComunicacionService,
              private EmpledadoHttp:EmpleadosService,
              private PedidosHttp:PedidosService,
              private ProductosHttp:ProductosService,
              private ComprasHttp:CompraService,
              private ProveedoresHttp:ProveedoresService) { }


  empleados:Boolean=true;
  pedidos:Boolean=true;
  compras:Boolean=true;
  productos:Boolean=true;
  proveedores:Boolean=true;
  websocket = new WebSocket("ws://localhost:3001");

  ngOnInit(): void {
    this.jwt=localStorage.getItem("jwt");
    switch(this.Comuni.getAgregar()){
      case 1:
        this.empleados=false;
        this.pedidos=true;
        this.compras=true;
        this.productos=true;
        this.proveedores=true;
        break;
      case 2:
        this.empleados=true;
        this.pedidos=false;
        this.compras=true;
        this.productos=true;
        this.proveedores=true;
        break;
      case 3:
        this.empleados=true;
        this.pedidos=true;
        this.compras=true;
        this.productos=false;
        this.proveedores=true;
        break;
      case 4:
        this.empleados=true;
        this.pedidos=true;
        this.compras=false;
        this.productos=true;
        this.proveedores=true;
        break;
      case 5:
        this.empleados=true;
        this.pedidos=true;
        this.compras=true;
        this.productos=true;
        this.proveedores=false;
        break;
      default:
        break;
    }
  }

  addEmpleado(){
    this.EmpledadoHttp.crearEmpleado((this.jwt?this.jwt:''),this.emp,Number(this.sueldo)).subscribe(resp=>{
      if(resp.ok){
        Swal.fire('Correcto','Empleado agregado','success');
      }else{
        Swal.fire('Incorrecto','No fue dar de alta al empleado','error');
      }
    });
  }

  addPedido(){
    console.log(this.pedi.fechaHora);
    this.PedidosHttp.crearPedido((this.jwt?this.jwt:''),this.pedi).subscribe(resp=>{
      if(resp.ok){
        Swal.fire('Correcto','Pedido agregado','success');
      }else{
        Swal.fire('Incorrecto','No fue posible crear el pedido','error');
      }
    })
  }

  addProducto(){
    this.ProductosHttp.crearProducto((this.jwt?this.jwt:''),this.produ).subscribe(resp=>{
      if(resp.ok){
        Swal.fire('Correcto','Producto agregado','success');
      }else{
        Swal.fire('Incorrecto','No fue posible crear el producto','error');
      }
    });
  }

  addCompra(){
    this.ComprasHttp.crearCompra((this.jwt?this.jwt:''),this.comp).subscribe(resp=>{
      if(resp.ok){
        Swal.fire('Correcto','Compra agregada','success');
      }else{
        Swal.fire('Incorrecto','No fue posible agregar la compra','error');
      }
    });
  }

  addProveedor(){
    this.ProveedoresHttp.crearProveedor((this.jwt?this.jwt:''),this.provee).subscribe(resp=>{
      if(resp.ok){
        Swal.fire('Correcto','Proveedor agregada','success');
      }else{
        Swal.fire('Incorrecto','No fue posible agregar el proveedor','error');
      }
    })
  }

}




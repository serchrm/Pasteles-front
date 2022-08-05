import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PagosComponent } from './pagos/pagos.component';
import { CompraComponent } from './compra/compra.component';
import { InventarioComponent } from './inventario/inventario.component';
import { NominaComponent } from './nomina/nomina.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    DashComponent,
    HomeComponent,
    PedidosComponent,
    ProveedoresComponent,
    EmpleadosComponent,
    PagosComponent,
    CompraComponent,
    InventarioComponent,
    NominaComponent,
    AgregarComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './compra/compra.component';
import { DashComponent } from './dash/dash.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { NominaComponent } from './nomina/nomina.component';
import { PagosComponent } from './pagos/pagos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  {
    path:'',
    component:DashComponent,
    children:[{
      path:'',redirectTo:"Home",pathMatch:"full"
    },{
      path:"Home",component:HomeComponent
    },
    {
      path:"Pedidos",component:PedidosComponent,
    },
    {
      path:"Proveedores",component:ProveedoresComponent,
    },
    {
      path:"Empleados",component:EmpleadosComponent,
    },
    {
      path:"Pagos",component:PagosComponent,
    },
    {
      path:"Compra",component:CompraComponent,
    },
    {
      path:"Inventario",component:InventarioComponent,
    },
    {
      path:"Nomina",component:NominaComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

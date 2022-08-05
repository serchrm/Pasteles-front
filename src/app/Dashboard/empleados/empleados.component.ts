import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado, Info } from 'src/app/Interfaces/interfaces';
import { ComunicacionService } from 'src/app/Services/comunicacion.service';
import { EmpleadosService } from 'src/app/Services/empleados.service';
import { PDFGeneratorService } from 'src/app/Services/pdfgenerator.service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:Info[]=[];
  infoEmpleados:Info[]=[];
  jwt:string|null='';

  constructor(private EmpleadosHttp:EmpleadosService,
              private Comuni:ComunicacionService,
              private router:Router,
              private PDFGenerator:PDFGeneratorService) { }

  ngOnInit(): void {
    this.jwt=localStorage.getItem("jwt");
    this.getEmpleados();
  }

  getEmpleados(){
    this.EmpleadosHttp.getInfo((this.jwt?this.jwt:'')).subscribe(resp=>{
      this.empleados=resp.result;
      console.log(this.empleados);
    })
  }

  getInfo(){
    this.EmpleadosHttp.getInfo((this.jwt?this.jwt:'')).subscribe(resp=>{
      this.infoEmpleados=resp.result
    })
  }

  eliminarEmpleado(aux:Info){
    this.EmpleadosHttp.eliminerEmpleado((this.jwt?this.jwt:''),aux.nombre).subscribe(resp=>{
      if(resp.ok){
        Swal.fire("","Empleado eliminado",'info');
      }else{
        Swal.fire("","No fue posible eliminar el empleado",'info');
      }
    });
    this.getEmpleados();
  }

  navegar(aux:Empleado){
    console.log(aux._id);
    this.Comuni.setId(aux._id);
    this.router.navigate(['Dash/Nomina']);
  }

  agregar(){
    this.Comuni.setAgregar(1);
    this.router.navigate(['Dash/Agregar']);
  }

  generarPDF(){
    this.getInfo();
    this.PDFGenerator.generarPDF(this.infoEmpleados);
  }

  exportEXCEL(){
    let element = document.getElementById('data');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book,worksheet,'Hoja1');
    XLSX.writeFile(book,'Empleados.xlsx');
  }

}

import { Component, OnInit } from '@angular/core';
import { Nomina } from 'src/app/Interfaces/interfaces';
import { ComunicacionService } from 'src/app/Services/comunicacion.service';
import { NominaService } from 'src/app/Services/nomina.service';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})
export class NominaComponent implements OnInit {

  id:String='';
  jwt:string|null='';
  nomina:Nomina={
    empleado:'',
    sueldo: 0,
    isr: 0,
    activo: 'false'
  }

  constructor(private Comuni:ComunicacionService,
              private NominaHttp:NominaService) { }

  ngOnInit(): void {
    this.id=this.Comuni.getId();
    console.log(this.id);
    this.jwt=localStorage.getItem("jwt");
    //this.getNomina();
  }

  getNomina(){
    this.NominaHttp.getNomina((this.jwt?this.jwt:''),this.id).subscribe(resp=>{
      console.log(resp);
      this.nomina=resp.result[0];
    })
  }

}

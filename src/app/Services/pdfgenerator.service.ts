import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { Info } from '../Interfaces/interfaces';
import { ComunicacionService } from './comunicacion.service';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PDFGeneratorService {

  DocDefinition:any={
    pageSize:'LETTER',
    pageOrientation:'portrait',
    content:[],
    images:{
    }
  }

  constructor(private Comuni:ComunicacionService,
              private http:HttpClient) { }

  generarPDF(aux:Info[]){
    let auxiliar:any={
      table: {
        headerRows: 1,
        widths: [ '*', '*', '*', '*' ],
        body: [
          [{text:'Nombre',alignment:'center'},{text:'Puesto',alignment:'center'},{text:'Sueldo',alignment:'center'},{text:'Telefono',alignment:'center'}]
        ]
      }
    }

    for(let i=0;i<aux.length;i++){
      let auxi = `[{text:${aux[i].nombre},alignment:'center'},{text:${aux[i].puesto},alignment:'center'},{text:${aux[i].Salida.sueldo},alignment:'center'},{text:${aux[i].telefono},alignment:'center'}]`
      auxiliar.table.body.push(auxi);
    }
    console.log(auxiliar.table);
    this.DocDefinition.content.push(auxiliar);

    pdfMake.createPdf(this.DocDefinition).open();
  }
}

import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string = 'ingresoOperacion';
  descripcionInput:string;
  valorInput:number;
  formulario:HTMLFormElement = document.querySelector('form');

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(e){
    this.tipo = e.target.value;
  }

  agregarValor(){
    
    if(this.tipo === 'ingresoOperacion'){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }else{
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }

    this.limpiarForm();

  }

  limpiarForm(){
    this.descripcionInput = '';
    this.valorInput = 0;
  }

}

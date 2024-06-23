import { Component } from '@angular/core';
import { Credito } from '@model/Credito';
import { Proyecto } from '@model/Proyecto';
import { CreditoService } from '@service/modelos/credito.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  constructor(
    private creditoService: CreditoService,
  ) { }

  maxDate = new Date();
  minDate = new Date(new Date().setMonth(new Date().getMonth() - 3));
  creditos: Credito[] = [];
  search?: string;
  fechIni?: Date;
  fechFin?: Date;
  ngOnInit(): void {
    this.listarCreditos(this.search, this.fechIni, this.fechFin);
  }

  listarCreditos(search?: string, fechIni?: Date, fechFin?: Date): void {
    this.creditoService.listar(search, fechIni, fechFin).subscribe((data) => {
      this.creditos = data;
    }, (error) => {
      console.error(error);
    });
  }

  getCantCuotas(listCuotas: any[]){
    return listCuotas.length;
  }

  searchInput(event: any): void {
    this.search = event.target.value;
    this.listarCreditos(this.search, this.fechIni, this.fechFin);
  }

  searchGeneral(){
    this.listarCreditos(this.search, this.fechIni, this.fechFin);
  }

  restoreBusqueda(){
    console.log('verificando');
    if(this.fechIni){
      console.log('verificando 2');
      this.search = '';
      this.fechIni = undefined;
      this.fechFin = undefined;
      this.listarCreditos(this.search, this.fechIni, this.fechFin);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.css']
})
export class NombresComponent implements OnInit {
  ciudades: string[] = [
    'Madrid',
    'Barcelona',
    'Sevilla',
    'Mérida',
    'Santander',
    'Pamplona'
  ];
  ciudadesBorradas: string[] = [];
  mostrar: boolean = false;

  listar(){
    return this.mostrar = true;
  }

  borrarCiudad(){
    this.ciudadesBorradas.push(this.ciudades.pop()!);
   }
  constructor() { }

  ngOnInit(): void {
  }

}

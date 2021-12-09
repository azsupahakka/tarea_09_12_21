import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {
  comidas: String[] = [
    'Comida Vegetariana',
    'Comida Mexicana',
    'Comida China',
    'Comida Italiana',
    'Comida Suiza',
    'Comida Americana',
    'Comida Española',
    'Comida Dominicana',
  ];
  borrarComidas() {
    this.comidas = [];
  }
  constructor() { }

  ngOnInit(): void {
  }

}

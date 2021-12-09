import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css'],
})
export class FloresComponent implements OnInit {
  flores: String[] = [
    'Orquídea',
    'Margarita',
    'Azucena',
    'Azalea',
    'Dalia',
    'Hortensia',
    'Lirio amarillo',
    'Hibisco',
  ];
  borrarFlores() {
    this.flores = [];
  }
  constructor() {}

  ngOnInit(): void {}
}

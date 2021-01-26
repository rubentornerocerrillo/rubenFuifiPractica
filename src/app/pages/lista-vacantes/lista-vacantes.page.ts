import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-vacantes',
  templateUrl: './lista-vacantes.page.html',
  styleUrls: ['./lista-vacantes.page.scss'],
})
export class ListaVacantesPage implements OnInit {

  constructor() { }


  vacantesLista: any=[
    {
      "titulo": "titulo vacante1",
      "fecha": "2020-04-14"
    },
    {
      "titulo": "titulo vacante2",
      "fecha": "2020-04-14"
    },
    {
      "titulo": "titulo vacante3",
      "fecha": "2020-04-14"
    },
    {
      "titulo": "titulo vacante4",
      "fecha": "2020-04-14"
    }
  ];
  hola: any=[
    {
      "titulo": "titulo vacante1",
      "fecha": "2020-04-14"
    }
  ];

  ngOnInit() {
  }
}

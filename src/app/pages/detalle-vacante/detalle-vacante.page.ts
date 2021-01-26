import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-detalle-vacante',
  templateUrl: './detalle-vacante.page.html',
  styleUrls: ['./detalle-vacante.page.scss'],
})
export class DetalleVacantePage implements OnInit {

vacante:any;
  constructor( private activatedRoute: ActivatedRoute) {
    
this.activatedRoute.params.subscribe( vacanteInfo => {
  
  this.vacante= vacanteInfo;
  console.log(this.vacante);
} )

   }

  ngOnInit() {
    
    
  }

  
}

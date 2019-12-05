import { Component, OnInit } from '@angular/core';
import { Obrero } from 'src/app/interfaces/obrero';
import { ObrerosService } from 'src/app/servicios/obreros.service';

@Component({
  selector: 'app-formobrero',
  templateUrl: './formobrero.component.html',
  styleUrls: ['./formobrero.component.css']
})
export class FormobreroComponent implements OnInit {

  obrero:Obrero = {
    dni: null,
    paterno: null,
    materno: null,
    nombre: null
  };

  constructor( private obreroservice: ObrerosService ) { 
  }

  ngOnInit() {
  }

  guardarObrero() {
    console.log( this.obrero); 
    this.obreroservice.save( this.obrero )
      .subscribe( 
        result => {
          alert( result['mensaje'] );

        },
        error => {
          console.log( error );
          alert("Ha ocurrido un error ");
        }
      );
  }

}

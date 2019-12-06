import { Component, OnInit } from '@angular/core';
import { Obrero } from 'src/app/interfaces/obrero';
import { ObrerosService } from 'src/app/servicios/obreros.service';
import { ActivatedRoute } from '@angular/router';

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

  //Declaramos la propiedad id
  id: any;
  modoedicion: boolean = false;

  constructor( private obreroservice: ObrerosService, private activatedRoute : ActivatedRoute ) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if( this.id ) {
      this.modoedicion = true;
      this.obreroservice.get(this.id)
        .subscribe(
          (data:Obrero) => { 
            this.obrero = data[0];
            console.log( this.obrero ); 
          }
        );
    }
    else {
      this.modoedicion = false;
    }
  }

  ngOnInit() {
  }

  guardarObrero() {
    if( this.modoedicion == false ) {
      this.obreroservice.save( this.obrero )
      .subscribe( 
        result => {
          if ( result['resultado'] =='Success'  ) {
            alert( result['mensaje'] );
          }
          else {
            alert( result['mensaje'] );
          }

        },
        error => {
          console.log( error );
          alert("Ha ocurrido un error ");
        }
      );
    }
    else {
      this.obreroservice.actualizar(this.obrero)
      .subscribe(
        result => {
          if ( result['resultado'] =='Success'  ) {
            alert( result['mensaje'] );
          }
          else {
            alert( result['mensaje'] );
          }

        },
        error => {
          console.log( error );
          alert("Ha ocurrido un error ");
        }
      )
    }
  }

  limpiarFormulario() {
    this.obrero.id = null;
    this.obrero.dni = null;
    this.obrero.paterno = null;
    this.obrero.materno = null;
    this.obrero.nombre = null;
  }

}

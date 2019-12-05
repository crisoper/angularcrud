import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importamos HttpClient 
import { ObrerosService } from 'src/app/servicios/obreros.service';
import { Obrero } from 'src/app/interfaces/obrero';

@Component({
  selector: 'app-obreros',
  templateUrl: './obreros.component.html',
  styleUrls: ['./obreros.component.css']
})
export class ObrerosComponent implements OnInit {

  API_URL = 'http://phpangular.test/';
  public obreros: Obrero[];

  constructor(private obreroservice : ObrerosService, private http : HttpClient ) { }
  ngOnInit() {
    this.http.get(this.API_URL + 'getallpersonas.php')
      .subscribe(
        (data:Obrero[]) => { this.obreros = data; } //result =>  ( console.log( result) )
      );
  }

}


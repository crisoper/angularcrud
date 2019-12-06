import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Obrero } from 'src/app/interfaces/obrero';

@Injectable({
  providedIn: 'root'
})
export class ObrerosService {

  API_URL = 'http://phpangular.test/';
  public obreros: Obrero[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private http : HttpClient ) { }

  ngOnInit() {
  }

  save( obrero:Obrero) {               
    return this.http.post(this.API_URL + 'createpersona.php', obrero, this.httpOptions );
  }

  get( id:number ) {               
    return this.http.get(this.API_URL + 'getpersona.php?id=' + id, this.httpOptions );
  }

  actualizar( obrero:Obrero ) {               
    return this.http.post(this.API_URL + 'updatepersona.php', obrero, this.httpOptions );
  }

}


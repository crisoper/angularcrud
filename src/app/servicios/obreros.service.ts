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

}


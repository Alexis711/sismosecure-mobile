import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AsistenciasService {
  headers = new HttpHeaders({
    "Content-Type":"application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  getAsistenciasUsuarioID(UsuarioID: any){

  }

  postAsistencia(body: any) {

  }
}

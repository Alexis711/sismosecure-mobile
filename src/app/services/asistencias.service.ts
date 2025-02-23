import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    return this.http.get(environment.URL_BASE+'Mobile/Asistencias/'+UsuarioID, { headers: this.headers });
  }

  postAsistencia(body: any) {

  }
}

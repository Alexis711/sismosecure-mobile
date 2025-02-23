import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  headers = new HttpHeaders({
    "Content-Type":"application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  postLogin(body: any) {
    return this.http.post(environment.URL_BASE+'inicio/mobile', body, { headers: this.headers });
  }
  
  getUsuarioId(UsuarioID: any) {

  }
}

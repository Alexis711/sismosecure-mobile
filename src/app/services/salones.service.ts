import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalonesService {
  headers = new HttpHeaders({
    "Content-Type":"application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  getSalones() {
    return this.http.get(environment.URL_BASE+'Mobile/Salones/Todos', { headers: this.headers });
  }

  getSalonesNombre() {
    
  }
}

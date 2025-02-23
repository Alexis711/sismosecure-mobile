import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  }

  getSalonesNombre() {
    
  }
}

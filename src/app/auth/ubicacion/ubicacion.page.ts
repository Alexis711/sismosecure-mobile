import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
  standalone: false,
})
export class UbicacionPage implements OnInit {
  isLoadingSalones: boolean = false;
  isHoraSalida: boolean = true;
  
  constructor() { }

  ngOnInit() {

  }

}

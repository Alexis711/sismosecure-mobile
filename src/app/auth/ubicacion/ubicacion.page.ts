import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Asistencias } from 'src/app/models/asistencias.model';
import { AsistenciasService } from 'src/app/services/asistencias.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})

export class UbicacionPage implements OnInit {
  isLoadingSalones: boolean = false;
  asistencias!: Asistencias[];

  constructor(
    private asistenciasServ: AsistenciasService,
  ) { }

  ngOnInit() {
    this.onObtenerAsistencias();
  }

  onObtenerAsistencias() {
    const dataUsuario = localStorage.getItem('Usuario');
    if(dataUsuario) {
      const usuario = JSON.parse(dataUsuario);
      this.asistenciasServ.getAsistenciasUsuarioID(usuario[0].UsuarioID)
        .subscribe((respuesta: any) => {
          if (respuesta.Estatus) {
            this.asistencias = respuesta.Data
            console.log(this.asistencias)
          }
        });
    }
  }

}

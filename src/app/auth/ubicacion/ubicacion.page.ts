import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  isLoadingAsistencias: boolean = true;
  asistencias!: Asistencias[];

  constructor(
    private asistenciasServ: AsistenciasService,
    private router: Router
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
            this.asistencias = respuesta.Data;
            this.isLoadingAsistencias = false;
          }
        });
    }
  }

  onRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
      this.router.navigate(['auth/ubicacion']);
    }, 2000);
  }
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Salones } from 'src/app/models/salones.model';
import { AsistenciasService } from 'src/app/services/asistencias.service';
import { SalonesService } from 'src/app/services/salones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})
export class HomePage implements OnInit {
  isLoadingSalones: boolean = true;
  salones!: Salones[];

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private salonesServ: SalonesService,
    private asistenciasServ: AsistenciasService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.onObtenerSalones();
  }

  onCollapseOpciones(SalonID: any){
    const desplegable = this.element.nativeElement.querySelector('#desplegarOpciones' + SalonID);
    if (desplegable) {
      if (desplegable.style.display === 'none' || !desplegable.style.display) {
        this.renderer.setStyle(desplegable, 'display', 'block');
      } else {
        this.renderer.setStyle(desplegable, 'display', 'none');
      }
    }
  }

  onObtenerSalones() {
    this.salonesServ.getSalones()
      .subscribe((respuesta: any) => {
        if (respuesta.Estatus) {
          this.salones = respuesta.Data;
          this.isLoadingSalones = false;
        }
      });
  }

  onRegistrarAsistencia(SalonID: any) {
    const dataUsuario = localStorage.getItem('Usuario');
    if(dataUsuario) {
      const usuario = JSON.parse(dataUsuario);
      const dataBody = {
        UsuarioID: usuario[0].UsuarioID,
        SalonID: SalonID,
      }
      this.asistenciasServ.postAsistencia(dataBody)
        .subscribe((respuesta: any) => {
          if (respuesta.Estatus) {
            this.mostrarToast();
            this.onObtenerSalones();
          }
        });
    }
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Asistencia Registrada',
      duration: 2000,
      position: 'bottom',
      color: 'secondary',
    });
    await toast.present();
  }
}

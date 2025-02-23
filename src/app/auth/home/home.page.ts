import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Salones } from 'src/app/models/salones.model';
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
  isLoadingSalones: boolean = false;
  salones!: Salones[];

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private salonesServ: SalonesService
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
          console.log(this.salones)
        }
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/usuarios.model';
import { UsuariosService } from '../services/usuarios.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ],
})
export class LoginPage implements OnInit {
  usuarios!: Usuarios[];
  formLogin!: FormGroup;

  constructor(
    private usuariosServ: UsuariosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      Correo: ['', [Validators.required]],
      Clave: ['', [Validators.required]],
    });
  }

  onIniciarSesion() {
    if(this.formLogin.valid){
      this.usuariosServ.postLogin(this.formLogin.value)
        .subscribe((respuesta: any) => {
          if (respuesta.Estatus) {            
            this.router.navigate(['auth']);
            console.log(respuesta.Data)
            localStorage.setItem('Usuario', JSON.stringify(respuesta.Data));
          } else {
            this.mostrarToast()
          }
        });
    }
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Verifique su correo o contraseña',
      duration: 2000,
      position: 'bottom',
      color: 'secondary',
    });
    await toast.present();
  }
}

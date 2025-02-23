import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/usuarios.model';
import { UsuariosService } from '../services/usuarios.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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
    private usuariosServe: UsuariosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      Correo: ['', [Validators.required]],
      Clave: ['', [Validators.required]],
    });
  }

  onIniciarSesion() {
    if(this.formLogin.valid){
      this.usuariosServe.postLogin(this.formLogin.value)
        .subscribe((respuesta: any) => {
          if (respuesta.Estatus) {            
            this.router.navigate(['auth']);
            console.log(respuesta.Data)
            localStorage.setItem('Usuario', respuesta.Data);
          }
        });
    }
  }
}

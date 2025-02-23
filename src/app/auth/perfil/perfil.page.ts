import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})
export class PerfilPage implements OnInit {
  usuarios!: Usuarios;
  formUsuario!: FormGroup

  constructor(
    private usuarioServ: UsuariosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.onObtenerUsuario();
  }

  onObtenerUsuario() {
    const dataUsuario = localStorage.getItem('Usuario');
    if(dataUsuario) {
      const usuario = JSON.parse(dataUsuario);
      this.usuarios = usuario[0];
      this.formUsuario = this.formBuilder.group({
        Nombres: [usuario[0].Nombres, [Validators.required]],
        Apellidos: [usuario[0].Apellidos, [Validators.required]],
        Correo: [usuario[0].Correo, [Validators.required]],
        Clave: [usuario[0].Clave, [Validators.required]],
      });
    }
  }

  onCancelar() {
    this.onObtenerUsuario();
    this.router.navigate(['auth/inicio']);
  }

}

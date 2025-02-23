import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UbicacionPageRoutingModule } from './ubicacion-routing.module';
import { UbicacionPage } from './ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UbicacionPage,
    UbicacionPageRoutingModule
  ],
  declarations: []
})

export class UbicacionPageModule {}

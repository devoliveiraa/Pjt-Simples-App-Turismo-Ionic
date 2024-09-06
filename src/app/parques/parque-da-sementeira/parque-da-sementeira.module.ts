import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParqueDaSementeiraPageRoutingModule } from './parque-da-sementeira-routing.module';

import { ParqueDaSementeiraPage } from './parque-da-sementeira.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParqueDaSementeiraPageRoutingModule,
  ],
  declarations: [ParqueDaSementeiraPage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParqueDaSementeiraPageModule {}

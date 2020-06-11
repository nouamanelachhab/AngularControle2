import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErreurRoutingModule } from './erreur-routing.module';
import { ErreurComponent } from './erreur.component';


@NgModule({
  declarations: [ErreurComponent],
  imports: [
    CommonModule,
    ErreurRoutingModule
  ]
})
export class ErreurModule { }

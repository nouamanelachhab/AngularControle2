import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErreurComponent } from './erreur.component';

const routes: Routes = [{ path: '', component: ErreurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErreurRoutingModule { }

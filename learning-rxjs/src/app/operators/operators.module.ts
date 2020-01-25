import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './core/core.component';
import { Routes, RouterModule } from '@angular/router';

const operatorsRoutes: Routes = [
  { path: '', component: OperatorsComponent }
]

@NgModule({
  declarations: [OperatorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(operatorsRoutes)
  ]
})
export class OperatorsModule { }

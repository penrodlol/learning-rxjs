import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptsComponent } from './core/core.component';
import { Routes, RouterModule } from '@angular/router';

const conceptsRoutes: Routes = [
  { path: '', component: ConceptsComponent }
];

@NgModule({
  declarations: [ConceptsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(conceptsRoutes)
  ]
})
export class ConceptsModule { }

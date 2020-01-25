import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './core/core.component';
import { Routes, RouterModule } from '@angular/router';

const subjectRoutes: Routes = [
  { path: '', component: SubjectsComponent }
]

@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(subjectRoutes)
  ]
})
export class SubjectsModule { }

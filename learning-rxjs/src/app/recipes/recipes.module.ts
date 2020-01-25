import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './core/core.component';
import { Routes, RouterModule } from '@angular/router';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent }
]

@NgModule({
  declarations: [RecipesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ]
})
export class RecipesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'concepts', loadChildren: './concepts/concepts.module#ConceptsModule' },
  { path: 'operators', loadChildren: './operators/operators.module#OperatorsModule' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'subjects', loadChildren: './subjects/subjects.module#SubjectsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

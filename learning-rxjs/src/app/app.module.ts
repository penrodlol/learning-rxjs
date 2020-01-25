import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConceptsModule } from './concepts/concepts.module';
import { OperatorsModule } from './operators/operators.module';
import { RecipesModule } from './recipes/recipes.module';
import { SubjectsModule } from './subjects/subjects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConceptsModule,
    OperatorsModule,
    RecipesModule,
    SubjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

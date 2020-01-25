import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConceptsModule } from './concepts/concepts.module';
import { OperatorsModule } from './operators/operators.module';
import { RecipesModule } from './recipes/recipes.module';
import { SubjectsModule } from './subjects/subjects.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConceptsModule,
    OperatorsModule,
    RecipesModule,
    SubjectsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './core/core.component';
import { Routes, RouterModule } from '@angular/router';
import { CombinationComponent } from './combination/combination.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { CreationComponent } from './creation/creation.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { FilteringComponent } from './filtering/filtering.component';
import { TransformationComponent } from './transformation/transformation.component';
import { UtilityComponent } from './utility/utility.component';

const operatorsRoutes: Routes = [
  { path: '', component: OperatorsComponent },
  { path: 'combination', component: CombinationComponent },
  { path: 'conditional', component: ConditionalComponent },
  { path: 'creation', component: CreationComponent },
  { path: 'error-handling', component: ErrorHandlingComponent },
  { path: 'multicasting', component: MulticastingComponent },
  { path: 'filtering', component: FilteringComponent },
  { path: 'transformation', component: TransformationComponent },
  { path: 'utility', component: UtilityComponent },
]

@NgModule({
  declarations: [
    OperatorsComponent,
    CombinationComponent,
    ConditionalComponent,
    CreationComponent,
    ErrorHandlingComponent,
    MulticastingComponent,
    FilteringComponent,
    TransformationComponent,
    UtilityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(operatorsRoutes)
  ]
})
export class OperatorsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemdefinitionComponent } from './problemdefinition/problemdefinition.component';

const routes: Routes = [
  {
    path: 'problemdefinition',
    component: ProblemdefinitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

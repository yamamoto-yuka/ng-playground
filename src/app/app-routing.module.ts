import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrolltriggerComponent } from './scrolltrigger/scrolltrigger.component';
import { StarfieldComponent } from './starfield/starfield.component';

const routes: Routes = [
  {path:'scroll', component:ScrolltriggerComponent},
  {path:'star', component:StarfieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

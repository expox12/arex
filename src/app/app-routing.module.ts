import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealsManagerComponent } from './deals-manager';


const routes: Routes = [{ path: '', component: DealsManagerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

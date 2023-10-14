import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CustomerquoteComponent } from './customerquote/customerquote.component';

const routes: Routes = [
  { path: '', redirectTo: '/customerquote', pathMatch: 'full' }, 
  { path: 'customerquote', component: CustomerquoteComponent },
  { path: 'location', component: LocationComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

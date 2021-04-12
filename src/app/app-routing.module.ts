import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventComponent} from './event/event.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import{LoginComponent} from './login/login.component';
import{NewEventComponent} from './new-event/new-event.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'event/:id', component: EventComponent},
  {path:'login', component: LoginComponent},
  {path:'newEvent', component: NewEventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

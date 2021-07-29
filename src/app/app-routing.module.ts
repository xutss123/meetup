import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventComponent} from './event/event.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import{LoginComponent} from './login/login.component';
import{NewEventComponent} from './new-event/new-event.component'
import { EditeventComponent } from './editevent/editevent.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'event/:id', component: EventComponent},
  {path:'login', component: LoginComponent},
  {path:'newEvent', component: NewEventComponent},
  {path:'editevent/:id', component:EditeventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentList } from './appointment-list/appointment-list';

const routes: Routes = [
  {
    path: 'appointments',
    component: AppointmentList,
  },
  {
    path: '',
    redirectTo: '/appointments',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

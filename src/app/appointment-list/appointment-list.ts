import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList implements OnInit {
  newAppointment: Appointment = {
    id: 0,
    title: '',
    date: new Date(),
  };

  appointments: Appointment[] = [];

  ngOnInit(): void {
    const storedAppointments = localStorage.getItem('appointments');
    this.appointments = storedAppointments ? JSON.parse(storedAppointments) : [];
  }
  addAppointment() {
    if (this.newAppointment.title && this.newAppointment.date) {
      this.appointments.push({
        id: this.appointments.length + 1,
        title: this.newAppointment.title,
        date: new Date(this.newAppointment.date),
      });
      this.newAppointment = { id: 0, title: '', date: new Date() };
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter((appt) => appt.id !== id);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}

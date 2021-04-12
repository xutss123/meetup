import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event/event';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events: Event[] = [];

  selectedEvent?: Event;

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  getEvents(): void {
    this.eventService.getEvents()
        .subscribe(events => this.events = events);
  }
  ngOnInit(): void {
    this.getEvents();
  }

}

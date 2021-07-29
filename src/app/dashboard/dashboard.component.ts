import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { Event } from '../event/event';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EVENTS } from '../event/mock-events';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService:ApiService,private route: ActivatedRoute,
    private router: Router,) { }

  events: Event[] = [];

  selectedEvent?: Event;

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  // getEvents(): void {
  //   this.apiService.getEvents()
  //       .subscribe(events => this.events = events);
  // }
  getEvents(): void {
    this.events = EVENTS;
  }
  ngOnInit(): void {
    this.getEvents();
  }

}

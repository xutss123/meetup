import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../service/event.service';
import {Event} from './event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EVENTS } from './mock-events';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {

  event?: Event  // = new Event(0,"event", "description", "topic", "date", "duration", "picture", "location", 0," time", "time", false, 0, "true");
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location) {
     }

  ngOnInit(): void {
   this.getEvent();
  }
  getEvent(): void{
    const id: number = this.route.snapshot.params['id'];
    console.log(EVENTS.find(event => event.id === 12));
    this.event = EVENTS.find(event => event.id === 12);
  }
}

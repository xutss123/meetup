import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';
import {Event} from './event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {

  event?: Event;

  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
   this.getEvent();
  }

   getEvent(): void {
    const id: number = this.route.snapshot.params.get('id');
     this.eventService.getEvent(id)
       .subscribe(event => this.event = event);
   }
}

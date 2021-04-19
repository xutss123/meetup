import { Injectable } from '@angular/core';
import {Event} from './event/event';
import { EVENTS } from './event/mock-events';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Observable<Event[]> {
    const events = of(EVENTS);
    return events;
  }

  getEvent(id: number): Observable<Event> {
    return of(EVENTS.filter(event => event.id === id)[0]);
  }

}

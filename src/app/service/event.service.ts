import { Injectable } from '@angular/core';
import {Event} from '../event/event';
import { EVENTS } from '../event/mock-events';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private apiService: ApiService) { }

  getEvents(): Observable<Event[]> {
    const events = this.apiService.getEvents();
    return events;
  }

  getEvent(id: number): Observable<Event> {
    return of(EVENTS.filter(event => event.id === id)[0]);
  }

  addEvent(event: Event){

  }

  getLastEventId(){
  let id = 0;
  id = EVENTS.sort(function(a,b){
    return a.id-b.id;
  } )[0].id;
  return id;
 
  }
}

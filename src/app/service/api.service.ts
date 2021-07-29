import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../event/event';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  constructor(private http:HttpClient) { }

  public get(url: string): Observable<any>{
    return this.http.get(url);
}
public createEvent(event: Event){
  return this.http.post(`${environment.url}/event/`,event);
}

public updateEvent(event: Event){
  return this.http.put(`${environment.url}/event/${event.id}`,event);
}

public deleteEvent(id: number){
  return this.http.delete(`${environment.url}/event/delete/${id}`);
}

public getEventById(id: number){
  return this.http.get(`${environment.url}/event/${id}`);
}

public getEvents(url?: string){
  return this.http.get<Event[]>(`${environment.url}/events`);
}
createBasicAuthToken(username: String, password: String) {
  return 'Basic ' + window.btoa(username + ":" + password)
}
registerSuccessfulLogin(username: string, password:string) {
  sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)

}
public loginUser(username:string, password:string){
  return this.http.get(`${environment.url}/api/v1/basicauth`,
   { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
     username = username;
     password = password;
    this.registerSuccessfulLogin(username, password);
  }));
}

}

import { Component, OnInit } from '@angular/core';
import {ApiService} from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'meetup';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(){
    this.apiService.getEvents().subscribe((res)=>{
      this.apiService.getEvents().subscribe((res)=>{
      });      
    });
  }
}

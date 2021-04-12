import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventService } from '../event.service';
import {Event} from '../event/event';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.sass']
})

export class NewEventComponent implements OnInit {

  firstFormGroup?: FormGroup;
  secondFormGroup?: FormGroup;
  isEditable = false;
  event?: Event;


  constructor(private _formBuilder: FormBuilder, private eventService: EventService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
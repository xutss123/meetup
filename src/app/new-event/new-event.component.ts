import { StepState } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../service/api.service';
import { EventService } from '../service/event.service';
import {Event} from '../event/event';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { EVENTS } from '../event/mock-events';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.sass']
})

export class NewEventComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  isEditable = false;
  isLinear = false;
  submitted: boolean = false;
  eventAddFailed: boolean = false;
  isLoading: boolean = false;
  events: any;
  hide = true;
  groupList : String[] = ["IBM Developer Romania", "IBM Developer Croatia", "IBM Developer Bulgaria", "IBM Developer Slovakia", "IBM Developer Austria", "IBM Developer Poland", "IBM Developer Netherlands"]

  constructor(private _formBuilder: FormBuilder, private eventService: EventService, private apiService:ApiService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  onSubmit(){
    this.submitted = true;
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid || this.thirdFormGroup.invalid) {
      return;
    }
    let id=this.eventService.getLastEventId()+1;
    let picture = "/picture";
    let name = this.firstFormGroup.controls.name.value;
    let description = this.firstFormGroup.controls.description.value;
    let topic = this.firstFormGroup.controls.topic.value;
    let date = this.firstFormGroup.controls.date.value;
    let duration = this.firstFormGroup.controls.duration.value;
    let location = this.firstFormGroup.controls.location.value;
    let rsvp_limit = this.secondFormGroup.controls.limit.value;
    let open_register_time = this.firstFormGroup.controls.openregister.value;
    let close_register_time = this.firstFormGroup.controls.closeregister.value;
    let has_fee = this.firstFormGroup.controls.has_fee.value;
    let fee = this.firstFormGroup.controls.fee.value;
    let time = this.firstFormGroup.controls.time.value;
    let is_online = this.firstFormGroup.controls.is_online.value;
    let groups = this.secondFormGroup.controls.groups.value;
    let link_meeting = this.firstFormGroup.controls.linkonline.value;

    console.log("here");
    let event = { id, name, description, picture, topic, date, duration, location, rsvp_limit, open_register_time, close_register_time, has_fee, fee, time, is_online, groups, link_meeting };
    // this.apiService.createEvent(event).subscribe(event => this.events.push(event));
    EVENTS.push(event);
    this.router.navigate(['/dashboard']);
  }
}
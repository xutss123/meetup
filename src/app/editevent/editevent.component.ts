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
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.sass']
})
export class EditeventComponent implements OnInit {


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
  event?: Event;
  groupList : String[] = ["IBM Developer Romania", "IBM Developer Croatia", "IBM Developer Bulgaria", "IBM Developer Slovakia", "IBM Developer Austria", "IBM Developer Poland", "IBM Developer Netherlands"]

  constructor(private _formBuilder: FormBuilder, private eventService: EventService, private apiService:ApiService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.getEvent();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fillform();
  }
  fillform():void {
    this.event = EVENTS.filter(event=>event.id === 12)[0];
    this.firstFormGroup.controls.name.setValue(this.event.name);
    this.firstFormGroup.controls.description.setValue(this.event.description);
    let topic = this.firstFormGroup.controls.topic.setValue(this.event.topic);
    let date = this.firstFormGroup.controls.date.setValue(this.event.date);
    let duration = this.firstFormGroup.controls.duration.setValue(this.event.duration);
    let location = this.firstFormGroup.controls.location.setValue(this.event.location);
    let rsvp_limit = this.secondFormGroup.controls.limit.setValue(this.event.rsvp_limit);
    let open_register_time = this.firstFormGroup.controls.openregister.setValue(this.event.open_register_time);
    let close_register_time = this.firstFormGroup.controls.closeregister.setValue(this.event.close_register_time);
    let has_fee = this.firstFormGroup.controls.has_fee.setValue(this.event.has_fee);
    let fee = this.firstFormGroup.controls.fee.setValue(this.event.fee);
    let time = this.firstFormGroup.controls.time.setValue(this.event.time);
    let is_online = this.firstFormGroup.controls.is_online.setValue(this.event.is_online);
    let groups = this.secondFormGroup.controls.groups.setValue(this.event.groups);
    let link_meeting = this.firstFormGroup.controls.linkonline.setValue(this.event.link_meeting);
  }
  getEvent(): void{
    const id: number = this.route.snapshot.params['id'];
    console.log(EVENTS.find(event => event.id === 12));
    this.event = EVENTS.find(event => event.id === 12);
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

    let event = { id, name, description, picture, topic, date, duration, location, rsvp_limit, open_register_time, close_register_time, has_fee, fee, time, is_online, groups, link_meeting };
    // this.apiService.createEvent(event).subscribe(event => this.events.push(event));
    EVENTS.push(event);
    this.router.navigate(['/dashboard']);
  }

}

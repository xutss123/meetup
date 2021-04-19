import { StepState } from '@angular/cdk/stepper';
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

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  isEditable = false;
  isLinear = false;
  submitted: boolean = false;
  eventAddFailed: boolean = false;
  isLoading: boolean = false;



  constructor(private _formBuilder: FormBuilder, private eventService: EventService) {
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
    let name = this.firstFormGroup.controls.name.value;
    let author = this.firstFormGroup.controls.description.value;
    let topic = this.firstFormGroup.controls.topic.value;
    let date = this.firstFormGroup.controls.date.value;
    let duration = this.firstFormGroup.controls.duration.value;
    let location = this.firstFormGroup.controls.location.value;
    let rsvp_limit = this.secondFormGroup.controls.limit.value;
    let open_register = this.firstFormGroup.controls.openregister.value;
    let close_register = this.firstFormGroup.controls.closeregister.value;
    let has_fee = this.firstFormGroup.controls.has_fee.value;
    let fee = this.firstFormGroup.controls.fee.value;
    let visibility = this.firstFormGroup.controls.visibility.value;

    let event = { name, author, topic, date, duration, location, rsvp_limit, open_register, close_register, has_fee, fee, visibility };
    this.eventService.addBook(event).subscribe(
      response => {
        console.log('response', response)
        // this.books = response;
        this.isHandleLoading(false);
      },
      (error: Response) => {
        this.isHandleLoading(false);
        console.log('error : ', error);
        this.bookAddFailed = true;
        this.bookAddError = 'Error in book add. please try again.';
  }
}
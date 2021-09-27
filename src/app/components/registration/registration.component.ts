import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { State, District } from './location';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm = this.fb.group(
    {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
    },
    { updateOn: 'submit' }
  );

  submitted: boolean = false;

  states: State[] = [];
  districts: District[] = [];

  constructor(
    private location: LocationService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.location.getStates().subscribe({
      next: (result) => {
        this.states = result.states;
      },
      error: (err) => console.log(err),
    });
  }

  setDistricts(event: any) {
    this.registrationForm.controls.state.setValue(event.target.value);
    // this.registrationForm.controls.state.setValidators(Validators.required)
    for (var i = 0; i < this.states.length; i++) {
      if (this.states[i].state_name === event.target.value) {
        this.location.getDistricts(this.states[i].state_id).subscribe({
          next: (result) => (this.districts = result.districts),
          error: (err) => console.log(err),
        });
      }
    }
  }

  handleSubmit(): void {
    this.submitted = true;
    if (this.registrationForm.status === 'VALID') {
      this.dialog.open(RegistrationDialogComponent);
    }
  }
}

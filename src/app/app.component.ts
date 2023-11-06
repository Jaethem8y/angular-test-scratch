import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'form';

  // feedback: Feedback = new Feedback('', '', 2, '', '');
  feedbackForm!: FormGroup;
  animals = ['cat', 'dog', 'tiger', 'racon', 'others'];

  constructor() {}

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      phoneNumber: new FormControl('', [Validators.required]),
      feedbackTitle: new FormControl('', [Validators.required]),
      feedback: new FormControl('', [Validators.required]),
      favoriteAnimal: new FormControl('', [Validators.required]),
    });
  }

  submitFeedback() {
    // console.log('Feedback form [Submit] - ', this.feedback)
    console.log('Feedback form [Submit] - ', this.feedbackForm.value);
  }
}

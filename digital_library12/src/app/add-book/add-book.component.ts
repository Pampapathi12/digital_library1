import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      isbnNumber: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      author: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      publication: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      details: ['', [Validators.maxLength(250), Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],
      quantity: ['', [Validators.required, Validators.min(1), Validators.max(5), Validators.pattern(/^\d+$/)]],
      price: ['', [Validators.required, Validators.min(5), Validators.max(50), Validators.pattern(/^\d+$/)]],
      branch: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]]
    });
  }

  get f() { return this.bookForm.controls; }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
    } else {
      this.bookForm.markAllAsTouched();
    }
  }
}

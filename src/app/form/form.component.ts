import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

interface FormData {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-form',
  imports: [CommonModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  title: string = 'Form';
  forms: any[] = [];
  isLoading = false;

  constructor(
    private formService: FormService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getForms();
    this.loader()
  }

  loader() {
    this.formService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  getForms() {
    this.formService.getFormData().subscribe({
      next: (response: any[]) => {
        console.log('Form data retrieved successfully:', this.forms);
        this.forms = (response as any).data;
      },
      error: (error) => {
        console.error('Error retrieving form data:', error);
      },
    });
  }

  submitForm(event: Event, name: string, email: string, message: string) {
    event.preventDefault();
    this.formService.setLoading(true);
    this.formService.addForm({ name, email, message }).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        this.toastr.success((response as any).message, 'Success!');
        this.getForms();
        this.formService.setLoading(false);
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        this.formService.setLoading(false);
      },
    });
  }
}

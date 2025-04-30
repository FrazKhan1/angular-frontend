import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './form-details.component.html',
  styleUrl: './form-details.component.css',
  standalone: true,  

})
export class FormDetailsComponent {
  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  form: any = {};

  ngOnInit() {
    this.getSignleForm();
  }

  getSignleForm() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.formService.getFormById(id).subscribe({
        next: (response) => {
          console.log('Form data retrieved successfully:', response);
          this.form = (response as any).data;
          this.toastr.success((response as any).message, 'Success!');
        },
      });
    }
  }
}

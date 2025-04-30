import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    {path: "form" , component: FormComponent},
    {path: "form/:id" , component: FormDetailsComponent},
    {path: "react-form" , component: ReactiveFormComponent}
];

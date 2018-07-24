import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';

//import { SimpleFormComponent } from './simple-form/simple-form.component';
//import { SubmitFlagFormComponent } from './submit-flag-form/submit-flag-form.component';
//import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
//import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';

@NgModule({
    imports: [CommonModule, CoachRoutingModule,
        ReactiveFormsModule],
    declarations: [CoachComponent]
})
export class CoachModule {}

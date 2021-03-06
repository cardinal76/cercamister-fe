import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';

@NgModule({
    imports: [CommonModule, CoachRoutingModule,
        ReactiveFormsModule],
    declarations: [CoachComponent]
})
export class CoachModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';

@NgModule({
    imports: [CommonModule, CoachRoutingModule],
    declarations: [CoachComponent]
})
export class CoachModule {}

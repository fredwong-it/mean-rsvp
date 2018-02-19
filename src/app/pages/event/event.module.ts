import { EVENT_ROUTES } from './event.routes';
import { EventComponent } from './event.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RsvpFormComponent } from './rsvp/rsvp-form/rsvp-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(EVENT_ROUTES)
  ],
  declarations: [
    EventComponent,
    EventDetailComponent,
    RsvpComponent,
    RsvpFormComponent
  ]
})
export class EventModule { }

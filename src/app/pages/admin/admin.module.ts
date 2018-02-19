import { ADMIN_ROUTES } from './admin.routes';
import { EventFormComponent } from './event-form/event-form.component';
import { AdminComponent } from './admin.component';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { DeleteEventComponent } from './update-event/delete-event/delete-event.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [
    AdminComponent,
    CreateEventComponent,
    UpdateEventComponent,
    EventFormComponent,
    DeleteEventComponent
  ]
})
export class AdminModule { }

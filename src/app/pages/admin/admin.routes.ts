import { CreateEventComponent } from './create-event/create-event.component';
import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { UpdateEventComponent } from './update-event/update-event.component';


export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'event/new',
    component: CreateEventComponent
  },
  {
    path: 'event/update/:id',
    component: UpdateEventComponent
  }
];

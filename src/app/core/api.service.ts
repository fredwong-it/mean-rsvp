// src/app/core/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ENV } from './env.config';
import { EventModel } from './models/event.model';
import { RsvpModel } from './models/rsvp.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  // GET list of public, future events
  getEvents$(): Observable<EventModel[]> {
    return this.http
      .get<EventModel[]>(`${ENV.BASE_API}events`)
      .catch(this._handleError);
  }

  // GET list of admin events
  getAdminEvents$(): Observable<EventModel[]> {
    return this.http
      .get(`${ENV.BASE_API}events/admin`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET an event by ID (login required)
  getEventById$(id: string): Observable<EventModel> {
    return this.http
      .get(`${ENV.BASE_API}event/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET RSVPs by event ID (login required)
  getRsvpsByEventId$(eventId: string): Observable<RsvpModel[]> {
    return this.http
      .get(`${ENV.BASE_API}event/${eventId}/rsvps`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // POST new RSVP (login required)
  postRsvp$(rsvp: RsvpModel): Observable<RsvpModel> {
    return this.http
      .post(`${ENV.BASE_API}rsvp/new`, rsvp, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // PUT existing RSVP (login required)
  editRsvp$(id: string, rsvp: RsvpModel): Observable<RsvpModel> {
    return this.http
      .put(`${ENV.BASE_API}rsvp/${id}`, rsvp, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // ----------------------------------------------------------------------------
  // EVENT API
  // ----------------------------------------------------------------------------

  // POST new event (admin only)
  postEvent$(event: EventModel): Observable<EventModel> {
    return this.http
      .post(`${ENV.BASE_API}event/new`, event, this._httpOptions)
      .catch(this._handleError);
  }

  // PUT existing event (admin only)
  editEvent$(id: string, event: EventModel): Observable<EventModel> {
    return this.http
      .put(`${ENV.BASE_API}event/${id}`, event, this._httpOptions)
      .catch(this._handleError);
  }

  // DELETE existing event and all associated RSVPs (admin only)
  deleteEvent$(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}event/${id}`, this._httpOptions)
      .catch(this._handleError);
  }

  // GET all events a specific use has RSVPed to (login required)
  getUserEvents$(userId: string): Observable<EventModel[]> {
    return this.http
      .get(`${ENV.BASE_API}events/${userId}`, this._httpOptions)
      .catch(this._handleError);
  }

  // ----------------------------------------------------------------------------
  // Private Method
  // ----------------------------------------------------------------------------

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.error.message || 'Error: Unable to complete request.';

    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }

    return Observable.throw(errorMsg);
  }

  private get _httpOptions(): any {
    return {
      headers: new HttpHeaders().set('Authorization', this._authHeader)
    };
  }
}

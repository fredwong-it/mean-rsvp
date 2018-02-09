// src/app/core/models/rsvp.model.ts

export class RsvpModel {
  constructor(
    public userId: string,
    public name: string,
    public eventId: string,
    public attending: boolean,
    public guest?: number,
    public comments?: string,
    public _id?: string
  ) { }
}

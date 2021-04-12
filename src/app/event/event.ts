import { Time } from "@angular/common";

export interface Event {
    id: number;
    name: string;
    description: string;
    topic: string;
    date: string;
    duration: string;
    picture: string;
    location: string;
    rsvp_limit: number;
    open_register_time: string;
    close_register_time: string;
    has_fee: boolean;
    fee: number;
    visibility: string;    
  }
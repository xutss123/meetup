
// export interface Event {
//     id?: number;
//     name: string;
//     description: string;
//     topic: string;
//     date: string;
//     duration: string;
//     picture: string;
//     location: string;
//     rsvp_limit: number;
//     open_register_time: string;
//     close_register_time: string;
//     has_fee: boolean;
//     fee: number;
//     visibility: string;    
//   }

import { BlockScrollStrategy } from "@angular/cdk/overlay";

export class Event {
  
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public topic: string,
    public date: string,
    public time: string,
    public duration: string,
    public is_online: boolean,
    public link_meeting: string,
    public groups: String[],
    public picture: string,
    public location: string,
    public rsvp_limit: number,
    public open_register_time: string,
    public close_register_time: string,
    public has_fee: boolean,
    public fee: number,
  ) {  }
  }
export class Event{
    id:number;
    name: string;
    title: string;

    
    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
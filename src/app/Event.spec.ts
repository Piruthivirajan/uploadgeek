import {Event} from './Event';

describe('Event', () => {
  it('should create an instance', () => {
    expect(new Event()).toBeTruthy();
  });

it('Should Return Assigned Values',()=>{

    let event =new Event({
      id:1,
      name:'raja',
      title: 'raja'
       });
       expect(event.id).toEqual(1);
       expect(event.name).toEqual('raja');
       expect(event.title).toEqual('raja');

  });

});
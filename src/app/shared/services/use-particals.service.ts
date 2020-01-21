import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseParticalsService {
  constructor() { }
  callParticals(myParams) {
    myParams = {
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle',
        },
      }
    };
  }
}

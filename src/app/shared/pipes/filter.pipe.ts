import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { IDrives } from 'src/app/drivetracker/models/drives';

@Pipe({
  name: 'filter'
})

@Injectable()

export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}







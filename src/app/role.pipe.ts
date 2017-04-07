import {Pipe, PipeTransform} from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: "search",
  pure: false
})


export class RolePipe implements PipeTransform {
  transform(input: Member[], search){
    if (input) {
      var output: Member[] = [];
      if (search === 'all') {
        return input;
      }
      for (var i = 0; i < input.length; i++) {
        if (input[i].role.toLowerCase() == search) {
          output.push(input[i]);
        }
      }
      for (var i = 0; i < input.length; i++) {
        if (input[i].firstName.toLowerCase() == search) {
          output.push(input[i]);
        }
      }
      for (var i = 0; i < input.length; i++) {
        if (input[i].lastName.toLowerCase() == search) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}

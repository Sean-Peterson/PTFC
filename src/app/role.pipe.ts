import {Pipe, PipeTransform} from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: "role",
  pure: false
})


export class RolePipe implements PipeTransform {
  transform(input: Member[], role){
    if (input) {
      var output: Member[] = [];
      if (role === 'all') {
        return input;
      }
      for (var i = 0; i < input.length; i++) {
        if (input[i].role == role) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}

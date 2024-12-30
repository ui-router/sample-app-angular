import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatMessage',
    standalone: false
})
export class FormatMessagePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return value.split(/\n/).map(p => `<p>${p}</p>`).join('\n');
  }
}


import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from './iplayer';


@Pipe({
  name: 'playerFilterPipe'
})
export class PlayerFilterPipePipe implements PipeTransform {

  transform(value: Iplayer[], filterText?:string): Iplayer[] {
    filterText = filterText?filterText.toLocaleLowerCase():undefined

    return filterText?value.filter((p:Iplayer)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}

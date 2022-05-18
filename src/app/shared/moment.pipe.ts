import { Pipe, PipeTransform } from "@angular/core";
import { profile } from "console";
import * as moment from "moment";

@Pipe({
  name: 'moment'
  pure: false
})
  export class MomentPipe implements PipeTransform{
    transform(m: moment.Moment, format: string = 'МММ YYYY'): string{
      return m.format(format)

    }

  }

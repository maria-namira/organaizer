import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { callbackify } from 'util';
import { DateService } from '../shared/date.service';

interface Day {
  value: moment.Moment
  active: boolean
  disabled: boolean
  selected: boolean
}

interface Week {
  days: Day[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendar: Week[]
  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this))
  }

  generate(now: moment.Moment){
const startDay = now.clone().startOf(unitOfTime: 'month').startOf(unitOfTime: 'week')
const endDay = now.clone().endOf(unitOfTime: 'month').endOf(unitOfTime: 'week')

const date = startDay.clone().subtract(1, 'day')

const calendar = []
while (date.isBefore(endDay, granularity: 'day')){
  calendar.push({
days: Array( arrayLength: 7)
.fill(value: 0)
.map (callbackify: () ⇒{
const value = date.add(amount: 1, unit: 'day').clone()
const active = moment().isSame(value, granularity: 'date')
const disabled = !now.isSame(value, granularity: 'month') 
const selected = now.isSame(value, granularity: 'date')



return{
  value, active, disabled, selected
}
})

  })
}

this.calendar = calendar
  }

  select(day: moment.Moment) {
    this.dateService.changeDate(day)
  }
}

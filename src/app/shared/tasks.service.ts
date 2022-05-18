import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import * as moment from 'moment';
import { callbackify } from 'util';

export interface Task {
  id?: string
  title: string
  date?: string 
  
}

interface CreateResponse {
  name: string
}
@Injectable({providedIn: 'root'})
export class TasksService {
  static url = 'https://angular-practice-calenda-af96d-default-rtdb.firebaseio.com/tasks'

  constructor(private http: HttpClient){

  }
  load(date: moment.Moment): Observable<Task[]>{
    return this.http
    .get<Task[]>(url: '${TasksService.url}/${date.format(format: 'DD-MM-YYYY')}.json')
    .pipe(map(project: tasks ⇒ {
if(!tasks) {
  return[]
}
return Object.keys(tasks).map(callbackify: key ⇒ ({...tasks[key], id: key})
    }))
  }
  create(task: Task): Observable<Task> {

return this.http
.post<CreateResponse>(url: '${TasksService.url}/${task.date}.json', task)
.pipe(map(project: res ⇒ {
  return {...task, id: resizeBy.name}
  }))
  }
remove(task: Task): Observable<void>{
  return this.http
  .delete<void>(url: `${TasksService.url}/${task.date}/${task.id}.json`)
}

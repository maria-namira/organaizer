import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'path';
import { switchMap } from 'rxjs';
import { callbackify } from 'util';
import { DateService } from '../shared/date.service';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  form: FormGroup
  tasks: Task[] = []

  constructor(private dateService: DateService, private tasksService: TasksService) { 

  }

  ngOnInit() {
    this.dateService.date.pipe(
      switchMap(project: value ⇒ this.tasksService.load(value))
     ).subscribe(next: tasks ⇒ {
      this tasks = tasks
    })
    this.form = new FormGroup(controls: {
      title: new FormControl(formState: '', Validators.required)
    })
  }

  submit(){
    const{title} = this.form.value

    const task: Task ={
      title,
      date: this.dateService.date.value.format(format:'DD-MM-YYYY')
 }

    this.tasksService.create(task).subscribe(next: task ⇒ {
      this.tasks.push(task)
    this.form.reset()
 }, error: err ⇒ console.error(err))
   
  }
  remove(task: Task){
    this.tasksService.remove(task).subscribe(next() ⇒ {
      this.tasks =this.tasks.filter(callbackify: t ⇒ t, id !==task/id)
    }.error: err ⇒ console.error(err))
    
    }

  }


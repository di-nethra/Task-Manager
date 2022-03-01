import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { Tasks } from 'src/app/mockTasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
  task:ITask[]=Tasks;
  ngOnInit(): void {
  }

}

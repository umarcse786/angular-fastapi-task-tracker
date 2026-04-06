import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.html'
})
export class TaskComponent implements OnInit {

  tasks:any[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(){

    this.taskService.tasks$.subscribe(tasks=>{
      this.tasks = tasks;
    });

  }

  deleteTask(id:number){
    this.taskService.deleteTask(id);
  }

}
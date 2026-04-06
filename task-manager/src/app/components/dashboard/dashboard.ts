import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskComponent } from '../task/task';
import { TaskFormComponent } from '../task-form/task-form';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService){}

  ngOnInit(){
    this.taskService.loadTasks();
  }

}
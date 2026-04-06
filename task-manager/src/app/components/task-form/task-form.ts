import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html'
})
export class TaskFormComponent {

  title="";
  description="";

  constructor(private taskService:TaskService){}

  addTask(){

    const task = {
      id: Date.now(),
      user_id:1,
      title:this.title,
      description:this.description,
      status:"Open"
    };

    this.taskService.addTask(task);

    this.title="";
    this.description="";
  }

}
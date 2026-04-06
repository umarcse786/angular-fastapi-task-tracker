import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:8000";

  private tasksSubject = new BehaviorSubject<any[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadTasks(){
    this.http.get<any[]>(`${this.apiUrl}/tasks`)
      .subscribe(data => {
        this.tasksSubject.next(data);
      });
  }

  addTask(task:any){
    this.http.post(`${this.apiUrl}/tasks`, task)
      .subscribe(() => {
        this.loadTasks();   // IMPORTANT
      });
  }

  deleteTask(id:number){
    this.http.delete(`${this.apiUrl}/tasks/${id}`)
      .subscribe(() => {
        this.loadTasks();
      });
  }

}
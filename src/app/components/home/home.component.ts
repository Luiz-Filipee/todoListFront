import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../service/task.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  idTask: number = 1;
  nameTask: string = '';
  valueTask: number = 0;
  tasks: { id:number, name: string, value: number }[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(){
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  createTask(){
    if (this.nameTask.trim() && this.valueTask > 0){
        const newTask = { name: this.nameTask, value: this.valueTask };
        this.taskService.addTask(newTask).subscribe(() => {
          this.loadTasks();
          this.nameTask = '';
          this.valueTask = 0;
        });
    }
    if(this.nameTask.trim() || this.valueTask == null){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insira todas as informacoes!",
      });
    }
  }

  removeTask(taskId: number){
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.loadTasks();
    });
  }
}

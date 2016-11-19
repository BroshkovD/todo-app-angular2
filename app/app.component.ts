import * as console from 'console';
import { Component } from '@angular/core';



import { TodoService } from './shared/todo.service';
import { TodosComponent } from './components/todos/todos.component';
import { Todo } from './shared/todo.model';



@Component({
  selector: 'todo-app',
  templateUrl: './app/app.component.html', 
  styleUrls: ['./app/app.component.css'], 
  providers: [ TodoService ]
})



export class AppComponent {
  title: string;

  constructor(){
    this.title = 'Todo App';

  }

}

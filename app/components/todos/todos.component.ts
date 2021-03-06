import { Component, OnInit } from '@angular/core';

import { ITodo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
    selector: 'todos',
    templateUrl: './app/components/todos/todos.component.html',
    styleUrls: ['./app/components/todos/todos.component.css'],
})

export class TodosComponent implements OnInit {
  todos: ITodo[];


  constructor(private todoService: TodoService) {
    this.todos = [];
  }

   ngOnInit() {
        this.todoService.getTodos().subscribe(todos => this.todos = todos);
    }

    onTodoCreated(todo: ITodo): void {
        this.todoService.addTodo(todo).subscribe(todo => this.addTodo(todo));
    }

    onTodoToggled(todo: ITodo): void {
        this.todoService.saveTodo(todo).subscribe(todo => {});
    }

    onTodoDeleted(todo: ITodo): void {
        this.todoService.deleteTodo(todo).subscribe(todo => this.deleteTodo(todo));
    }

    private addTodo(todo: ITodo): void {
        this.todos.push(todo);
    }

    private deleteTodo(todo: ITodo): void {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}

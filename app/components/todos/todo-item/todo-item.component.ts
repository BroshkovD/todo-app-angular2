import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Todo } from '../../../shared/todo.model';

@Component ({
  selector: 'todo-item',
  templateUrl: './app/components/todos/todo-item/todo-item.component.html',
  styleUrls: ['./app/components/todos/todo-item/todo-item.component.css']
})

export class TodoItem {
  @Input() todo: Todo;
  @Output() toggled = new EventEmitter();
  @Output() deleted = new EventEmitter();
  
  constructor() {
    this.toggled = new EventEmitter<Todo>();
    this.deleted = new EventEmitter<Todo>();
  }

  toggle() {
    this.todo.done = !this.todo.done;
    this.toggled.emit(this.todo)
  }
  delete() {
    this.deleted.emit(this.todo);
  }
}
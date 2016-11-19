import { TodoItem } from './components/todos/todo-item/todo-item.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodosComponent } from './components/todos/todos.component';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TodoSeedData }  from './shared/todo.data';


@NgModule({
  imports:      [ BrowserModule,  HttpModule, InMemoryWebApiModule.forRoot(TodoSeedData),],
  declarations: [ AppComponent, TodoListComponent, TodoItem, TodoFormComponent, TodosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

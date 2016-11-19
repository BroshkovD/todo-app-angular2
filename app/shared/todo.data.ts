import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TodoSeedData implements InMemoryDbService {

  createDb() {
    let todos = [
      { id: 1, title: 'My todo task #1', done: false },
      { id: 2, title: 'My todo task #2', done: false },
      { id: 3, title: 'My todo task #3', done: false }
    ]

    return { todos };
  }
}


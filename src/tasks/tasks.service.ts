import { Task } from './../../dist/tasks/task.model.d';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}

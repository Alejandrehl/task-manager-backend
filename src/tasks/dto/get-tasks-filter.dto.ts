import { TaskStatus } from './../task.model';
import { IsOptional } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  status: TaskStatus;

  @IsOptional()
  search: string;
}

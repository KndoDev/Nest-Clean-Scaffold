import { taskDto } from 'src/task/infrastructure/api/dto/task.dto';

export interface ITaskRepository {
  createTask(task: taskDto): Promise<any>;
}

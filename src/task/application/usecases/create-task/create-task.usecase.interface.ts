import { taskDto } from 'src/task/infrastructure/api/dto/task.dto';

export interface ICreateTaskUseCase {
  create(task: taskDto): Promise<any>;
}

import { taskDto } from 'src/task/infrastructure/api/dto/task.dto';
import { ICreateTaskUseCase } from 'src/task/application/usecases/create-task/create-task.usecase.interface';
import { Inject } from '@nestjs/common';
import { ITaskRepository } from 'src/task/domain/repository/task.repository.interface';
import { TypeOrmTaskRepository } from 'src/task/infrastructure/repository/typeOrmTaskRepository';

export class CreateTaskUseCase implements ICreateTaskUseCase {
  constructor(
    @Inject(TypeOrmTaskRepository)
    private readonly _TaskRepository: ITaskRepository,
  ) {}
  create(task: taskDto): Promise<any> {
    //Application Login
    return this._TaskRepository.createTask(task);
  }
}

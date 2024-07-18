import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTaskUseCase } from 'src/task/application/usecases/create-task/create-task.usecase';
import { ICreateTaskUseCase } from 'src/task/application/usecases/create-task/create-task.usecase.interface';
import { taskDto } from 'src/task/infrastructure/api/dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(
    @Inject(CreateTaskUseCase)
    private readonly _CreateTaskUseCase: ICreateTaskUseCase,
  ) {}
  @Post()
  createTask(@Body() task: taskDto) {
    return this._CreateTaskUseCase.create(task);
  }
}

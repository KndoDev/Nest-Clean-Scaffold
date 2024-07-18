import { Injectable } from '@nestjs/common';
import { ITaskRepository } from 'src/task/domain/repository/task.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/task/domain/entity/task.entity';
import { Repository } from 'typeorm';
import { taskDto } from 'src/task/infrastructure/api/dto/task.dto';

@Injectable()
export class TypeOrmTaskRepository implements ITaskRepository {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly _TypeOrmRepository: Repository<TaskEntity>,
  ) {}
  async createTask(task: taskDto): Promise<any> {
    console.log(task);
    return await this._TypeOrmRepository.save(task);
  }
}

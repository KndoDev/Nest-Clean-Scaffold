import { Module } from '@nestjs/common';
import { TaskController } from './infrastructure/api/task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/task/domain/entity/task.entity';
import { CreateTaskUseCase } from 'src/task/application/usecases/create-task/create-task.usecase';
import { TypeOrmTaskRepository } from 'src/task/infrastructure/repository/typeOrmTaskRepository';
import { DataSource } from 'typeorm';

@Module({
  controllers: [TaskController],
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [CreateTaskUseCase, TypeOrmTaskRepository],
})
export class TaskModule {
  constructor(private dataSource: DataSource) {}
}

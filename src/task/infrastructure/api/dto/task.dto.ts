import { TaskEntity } from 'src/task/domain/entity/task.entity';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
} from 'class-validator';

export class taskDto implements TaskEntity {
  @IsString()
  name!: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  scopes!: string[];

  @IsArray()
  @IsString({ each: true })
  files!: string[];

  @IsDate()
  date_init!: Date;

  @IsDate()
  date_end!: Date;

  @IsString()
  state!: string;

  @IsBoolean()
  isPublic!: boolean;

  @IsString()
  @IsOptional()
  description!: string;
}

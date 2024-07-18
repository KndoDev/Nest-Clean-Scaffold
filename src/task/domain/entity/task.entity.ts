import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column()
  name!: string;
  @Column('text', { array: true })
  scopes!: string[];
  @Column('text', { array: true })
  files!: string[];
  @Column({ type: 'date' })
  date_init!: Date;
  @Column({ type: 'date' })
  date_end!: Date;
  @Column()
  state!: string;
  @Column()
  isPublic!: boolean;
  @Column()
  description!: string;
}

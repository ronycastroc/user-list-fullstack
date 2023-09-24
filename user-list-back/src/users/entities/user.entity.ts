import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 100, nullable: false })
  email: string;

  @Column({ length: 255, nullable: false })
  password: string;

  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'date', nullable: true })
  updatedAt: Date;
}

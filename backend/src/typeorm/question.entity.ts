import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'question_id',
  })
  id: number;

  @Column({
    name: 'question',
    nullable: false,
    default: '',
  })
  question: string;

  @Column({
    name: 'correctAnswer',
    nullable: false,
    default: '',
  })
  correctAnswer: string;

  @Column({
    name: 'badAnswer1',
    nullable: false,
    default: '',
  })
  badAnswer1: string;

  @Column({
    name: 'badAnswer2',
    nullable: false,
    default: '',
  })
  badAnswer2: string;

  @Column({
    name: 'badAnswer3',
    nullable: false,
    default: '',
  })
  badAnswer3: string;
}

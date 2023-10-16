import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @MinLength(1)
  question: string;

  @IsNotEmpty()
  @MinLength(1)
  correctAnswer: string;

  @IsNotEmpty()
  @MinLength(1)
  badAnswer1: string;

  @IsNotEmpty()
  @MinLength(1)
  badAnswer2: string;

  @IsNotEmpty()
  @MinLength(1)
  badAnswer3: string;
}

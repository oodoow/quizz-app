import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from 'src/questions/dtos/CreateQuestion.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  createQuestion(createQuestionDto: CreateQuestionDto) {
    const newQuestion = this.questionRepository.create(createQuestionDto);
    return this.questionRepository.save(newQuestion);
  }

  getQuestions() {
    return this.questionRepository.find();
  }

  //   findQuestionsById(id: number) {
  //     return this.questionRepository.findOne(id);
  //   }
}

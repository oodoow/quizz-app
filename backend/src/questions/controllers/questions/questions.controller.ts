import {
  Body,
  Controller,
  Get,
  //   Param,
  //   ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from 'src/questions/dtos/CreateQuestion.dto';
import { QuestionsService } from 'src/questions/services/questions/questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  getQuestions() {
    return this.questionService.getQuestions();
  }

  //   @Get('id/:id')
  //   findQuestionsById(@Param('id', ParseIntPipe) id: number) {
  //     return this.questionService.findQuestionsById(id);
  //   }

  @Post('create')
  @UsePipes(ValidationPipe)
  createQuestions(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createQuestion(createQuestionDto);
  }

  @Post('massCreateQuestion')
  @UsePipes(ValidationPipe)
  massCreateQuestion(@Body() createQuestionDto: any) {
    return this.questionService.massCreateQuestion(createQuestionDto);
  }
}

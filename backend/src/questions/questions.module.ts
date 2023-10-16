import { Module } from '@nestjs/common';
import { QuestionsController } from './controllers/questions/questions.controller';
import { QuestionsService } from './services/questions/questions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}

import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { Question } from './question.entity';
// import { QuizRepository } from './quiz.repository';
// import { QuestionRepository } from './question.repository';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  providers: [QuizService, QuestionService],
  //providers: [QuizService, QuizRepository, QuestionService, QuestionRepository],
})
export class QuizModule {}

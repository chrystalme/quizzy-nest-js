import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';
import { Option } from './entities/option.entity';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionService],
  //providers: [QuizService, QuizRepository, QuestionService, QuestionRepository],
})
export class QuizModule {}

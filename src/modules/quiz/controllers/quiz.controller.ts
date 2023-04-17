import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { createQuizDto } from '../../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuizzes(): string[] {
    return this.quizService.getAllQuizzes();
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async saveQuiz(@Body() quizData: createQuizDto) {
    return await this.quizService.createQuiz(quizData);
  }
}

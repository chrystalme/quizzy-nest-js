import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { createQuizDto } from '../dbo/createQuiz.dbo';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuizzes(): string[] {
    return this.quizService.getAllQuizzes();
  }
  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: createQuizDto) {
    return { data: quizData };
  }
}

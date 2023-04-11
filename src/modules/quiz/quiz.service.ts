import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { createQuizDto } from '../dbo/create-quiz.dto';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: QuizRepository, // @InjectRepository(QuizRepository) private quizRepository: QuizRepository, // private readonly quizRepository: QuizRepository,
  ) {}
  getAllQuizzes() {
    return ['Quiz 1', 'Quiz 2', 'Quiz 3', 'This is another quiz'];
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: { questions: true }, // how to make relations to connect
    });
  }

  async createQuiz(quizData: createQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quizData);
  }
}

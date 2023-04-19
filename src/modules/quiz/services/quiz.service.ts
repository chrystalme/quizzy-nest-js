import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from '../repositories/quiz.repository';
import { createQuizDto } from '../../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: QuizRepository, // @InjectRepository(QuizRepository) private quizRepository: QuizRepository, // private readonly quizRepository: QuizRepository,
  ) {}
  async getAllQuizzes(): Promise<Quiz[]> {
    const allQuiz = await this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.questions', 'question')
      .leftJoinAndSelect('question.options', 'option')
      .getMany();
    return allQuiz;
    // return ['Quiz 1', 'Quiz 2', 'Quiz 3', 'This is another quiz'];
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: { questions: { options: true } }, // how to make relations to connect
    });
  }

  async createQuiz(quizData: createQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quizData);
  }
}

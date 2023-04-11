import { Injectable } from '@nestjs/common';
import { createQuestionDto } from '../dbo/create-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private questionRepository: QuestionRepository,
  ) {}

  async createQuestion(
    question: createQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });
    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();
    return newQuestion;
  }
}
// @Injectable()
// export class QuestionService {
//   constructor(
//     @InjectRepository(Question) private questionRepository: QuestionRepository,
//     // @InjectRepository(Quiz) private quizRepository: QuizRepository,
//     private readonly entityManager: EntityManager,
//   ) {}

//   async createQuestion(
//     question: createQuestionDto,
//     quizId: number,
//   ): Promise<Question> {
//     const newQuestion = await this.questionRepository.save({
//       question: question.question,
//     });

//     await this.entityManager.transaction(async (manager) => {
//       const quiz = await manager.findOne(Quiz, {
//         relations: ['questions'],
//       });
//       quiz.questions = quiz.questions || []; // initialize to empty array if undefined
//       quiz.questions = [...quiz.questions, newQuestion];
//       await manager.save(quiz);
//     });

//     return newQuestion;
//   }
// }

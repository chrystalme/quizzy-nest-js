import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuizzes() {
    return ['Quiz 1', 'Quiz 2', 'Quiz 3', 'This is another quiz'];
  }
}

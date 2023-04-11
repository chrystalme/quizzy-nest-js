import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizRepository extends Repository<Quiz> {
  constructor(dataSource: DataSource) {
    super(Quiz, dataSource.createEntityManager());
  }
}

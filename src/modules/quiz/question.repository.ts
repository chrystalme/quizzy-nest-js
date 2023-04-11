import { Repository, DataSource } from 'typeorm';
import { Question } from './question.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionRepository extends Repository<Question> {
  constructor(dataSource: DataSource) {
    super(Question, dataSource.createEntityManager());
  }
}

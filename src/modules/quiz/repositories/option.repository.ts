import { DataSource, Repository } from 'typeorm';
import { Option } from '../entities/option.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OptionRepository extends Repository<Option> {
  constructor(dataSource: DataSource) {
    super(Option, dataSource.createEntityManager());
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from '../entities/option.entity';
import { createOptionDto } from 'src/modules/dto/create-option.dto';
import { Question } from '../entities/question.entity';
import { OptionRepository } from '../repositories/option.repository';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option) private optionRepository: OptionRepository,
  ) {}
  async createOption(
    option: createOptionDto,
    question: Question,
  ): Promise<Option> {
    const newOption = await this.optionRepository.save({
      isCorrect: option.isCorrect,
      text: option.text,
    });
    question.options = [...question.options, newOption];
    await question.save();
    return newOption;
  }
}

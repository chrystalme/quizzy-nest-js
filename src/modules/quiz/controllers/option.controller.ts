import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { createOptionDto } from 'src/modules/dto/create-option.dto';
// import { Option } from '../entities/option.entity';

@Controller('question/option')
export class OptionController {
  /**
   *
   */
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() option: createOptionDto) {
    const question = await this.questionService.getQuestionById(
      option.questionId,
    );
    console.log(question);
    return await this.optionService.createOption(option, question);
    // return option;
  }
}

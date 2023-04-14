import { Length, IsNotEmpty } from 'class-validator';

export class createQuestionDto {
  @IsNotEmpty({ message: 'the quiz should have a title' })
  @Length(3, 255, {
    message: 'the quiz title should be at least 3 characters long',
  })
  question: string;

  @IsNotEmpty()
  quizId: number;
}

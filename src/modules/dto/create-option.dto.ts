import { Length, IsNotEmpty } from 'class-validator';

export class createOptionDto {
  @IsNotEmpty({
    message: 'Text is required',
  })
  @Length(3, 255)
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}

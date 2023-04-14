import { Length, IsNotEmpty } from 'class-validator';

export class createQuizDto {
  @IsNotEmpty({ message: 'the quiz should have a title' })
  @Length(3, 255, {
    message: 'the quiz title should be at least 3 characters long',
  })
  title: string;

  @Length(3)
  @IsNotEmpty()
  description: string;
}

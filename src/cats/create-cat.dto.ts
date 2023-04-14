import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;
  age: number;
  breed: string;
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  /**
   * Create a new cat with the given data.
   * @param createCatDto The data for the cat to be created.
   * @returns A promise that resolves to the created cat.
   */
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }
  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }
  // @Get()
  // findAll(): Observable<any[]> {
  //   return of([]);
  // }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}

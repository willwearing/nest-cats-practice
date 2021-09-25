import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { CreateCatDto } from './create-cat-dto';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {

  }
  /*
  This is how you create a new cat without using a DTO 
  @Post()
  create(@Req() request: Request) {
    return 'This action adds a new cat';
  }
  */

  /*   
  This is how to have a POST request without using a service
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  } 
  */

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  /*   
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  } 
  */

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  /*
  We can also pass in a particular parameter token to the decorator,
  and then reference the route parameter in the method body
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
  */

  @Post(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
  
}

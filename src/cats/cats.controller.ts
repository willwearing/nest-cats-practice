import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { CreateCatDto } from './create-cat-dto';

@Controller('cats')
export class CatsController {

  /*
  This is how you create a new cat without using a DTO 
  @Post()
  create(@Req() request: Request) {
    return 'This action adds a new cat';
  }
  */

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
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

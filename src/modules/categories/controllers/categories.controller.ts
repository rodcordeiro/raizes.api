import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoryServices } from '../services/categories.service';
import { CreateCategoryDTO } from '../dtos/create.dto';

@ApiTags('Categorias')
@Controller({
  version: '1',
  path: '/categories',
})
export class CategoryController {
  constructor(private readonly _service: CategoryServices) {}

  @Get()
  async index() {
    return await this._service.findAll();
  }
  @Get('/:id')
  async view(@Param('id') id: string) {
    return this._service.findBy({ id: id });
  }
  @Post()
  async create(@Body() data: CreateCategoryDTO) {
    return this._service.store(data);
  }
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: CreateCategoryDTO) {
    return this._service.update(id, data);
  }
  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this._service.destroy(id);
  }
}

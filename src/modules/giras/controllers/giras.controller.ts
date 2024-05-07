import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GirasService } from '../services/giras.service';
import { CreateGiraDTO } from '../dto/create.dto';

@ApiTags('Giras')
@Controller({
  version: '1',
  path: '/giras',
})
export class GirasController {
  constructor(private readonly _service: GirasService) {}

  @Get()
  async index() {
    return await this._service.findAll();
  }
  @Get('/:id')
  async view(@Param('id') id: number) {
    return this._service.findBy({ id: id });
  }
  @Post()
  async create(@Body() data: CreateGiraDTO) {
    return this._service.store(data);
  }
  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: CreateGiraDTO) {
    return this._service.update(id, data);
  }
  @Delete('/:id')
  async remove(@Param('id') id: number) {
    return this._service.destroy(id);
  }
}

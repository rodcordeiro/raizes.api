import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Auth, Public } from '@/common/decorators/auth.decorator';

import { PointsService } from '../services/points.service';
import { CreatePointDTO } from '../dtos/create.dto';
import { UpdatePointDTO } from '../dtos/update.dto';
import { GetPointsDTO } from '../dtos/get.dto';

@Auth()
@ApiTags('Pontos')
@Controller({
  version: '1',
  path: '/points',
})
export class PointsController {
  constructor(private readonly _service: PointsService) {}

  @Public()
  @Get()
  async index(@Query() queries: GetPointsDTO) {
    console.log({ queries });
    if (queries.linha)
      return await this._service.findBy({ linha: { id: +queries.linha } });
    return await this._service.findAll();
  }

  @Public()
  @Get('/:id')
  async view(@Param('id') id: number) {
    return this._service.findOneBy({ id });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: CreatePointDTO) {
    return this._service.store(data);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() data: UpdatePointDTO) {
    return this._service.update(id, data);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    return this._service.destroy(id);
  }
}

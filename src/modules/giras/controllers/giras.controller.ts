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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Auth, Public } from '@/common/decorators/auth.decorator';

import { GirasService } from '../services/giras.service';
import { CreateGiraDTO } from '../dto/create.dto';
import { UpdateGiraDTO } from '../dto/update.dto';
import { AssignLineDTO, UpdateAssignLineDTO } from '../dto/assign.dto';

@Auth()
@ApiTags('Giras')
@Controller({
  version: '1',
  path: '/giras',
})
export class GirasController {
  constructor(private readonly _service: GirasService) {}

  @Public()
  @Get()
  async index() {
    return await this._service.findAll();
  }

  @Get('/:id')
  async view(@Param('id') id: number) {
    return this._service.findDetails(id);
  }

  @Post()
  async create(@Body() data: CreateGiraDTO) {
    return this._service.store(data);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: UpdateGiraDTO) {
    return this._service.update(id, data);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    return this._service.destroy(id);
  }

  @Post('/:id/assign')
  async assign(@Param('id') id: number, @Body() data: AssignLineDTO[]) {
    return this._service.assignLine(id, data);
  }

  @Put('/:id/assign')
  async updateAssign(
    @Param('id') id: number,
    @Body() data: UpdateAssignLineDTO[],
  ) {
    return this._service.updateAssignes(id, data);
  }
}

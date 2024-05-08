import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { BaseService } from '@/common/services/base.service';
import { LineServices } from '@/modules/lines/services/lines.service';

import { GirasEntity, GirasLinhasEntity } from '../entities/giras.entity';
import { AssignLineDTO } from '../dto/assign.dto';

@Injectable()
export class GirasService extends BaseService<GirasEntity> {
  override repository = this._repository;
  constructor(
    @Inject('GIRAS_REPOSITORY')
    private _repository: Repository<GirasEntity>,
    @Inject('GIRAS_LINHA_REPOSITORY')
    private _linhasRepository: Repository<GirasLinhasEntity>,
    private readonly _linesService: LineServices,
  ) {
    super();
  }
  async findDetails(id: number) {
    return this._repository.findOneOrFail({
      where: { id },
      relations: {
        linhas: true,
      },
      // relationLoadStrategy: 'join',
    });
  }

  async assignLine(id: number, data: AssignLineDTO) {
    try {
      await this._linesService.findBy({ id: data.linha });
      const details = await this._linhasRepository.create({
        gira: id,
        linha: data.linha,
        festa: data.festa,
      });
      return this._linhasRepository.save(details);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

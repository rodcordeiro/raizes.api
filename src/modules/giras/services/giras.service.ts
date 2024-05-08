import { Inject, Injectable } from '@nestjs/common';
import { GirasEntity } from '../entities/giras.entity';
import { BaseService } from '@/common/services/base.service';

import { Repository } from 'typeorm';
import { AssignLineDTO } from '../dto/assign.dto';

@Injectable()
export class GirasService extends BaseService<GirasEntity> {
  override repository = this._repository;
  constructor(
    @Inject('GIRAS_REPOSITORY')
    private _repository: Repository<GirasEntity>,
  ) {
    super();
  }
  async findDetails(id: number) {
    return this._repository.findOneOrFail({
      where: { id },
      relations: { linhas: true },
    });
  }

  async assignLine(id: number, data: AssignLineDTO) {
    return data
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { GirasEntity } from '../entities/giras.entity';
import { BaseService } from '@/common/services/base.service';

import { Repository } from 'typeorm';

@Injectable()
export class GirasService extends BaseService<GirasEntity> {
  override repository = this._repository;
  constructor(
    @Inject('GIRAS_REPOSITORY')
    private _repository: Repository<GirasEntity>,
  ) {
    super();
  }
}

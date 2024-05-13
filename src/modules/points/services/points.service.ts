import { Inject, Injectable } from '@nestjs/common';

import { BaseService } from '@/common/services/base.service';

import { PointsEntity } from '../entities/points.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PointsService extends BaseService<PointsEntity> {
  override repository = this._repository;
  constructor(
    @Inject('POINTS_REPOSITORY')
    private _repository: Repository<PointsEntity>,
  ) {
    super();
  }
}

import { DataSource } from 'typeorm';
import { GirasEntity } from '../entities/giras.entity';

export const girasProviders = [
  {
    provide: 'GIRAS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(GirasEntity),
    inject: ['DATA_SOURCE'],
  },
];

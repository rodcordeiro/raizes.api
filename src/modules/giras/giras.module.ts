import { Module } from '@nestjs/common';

import { GirasController } from './controllers/giras.controller';
import { GirasService } from './services/giras.service';
import { girasProviders } from './providers/giras.provider';

@Module({
  imports: [],
  controllers: [GirasController],
  providers: [...girasProviders, GirasService],
  exports: [GirasService],
})
export class GirasModule {}

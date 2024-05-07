import { Module } from '@nestjs/common';

import { HealthModule } from '@/modules/health/health.module';
import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { CategoriesModule } from '@/modules/categories/categories.module';
import { LinesModule } from '@/modules/lines/lines.module';
import { GirasModule } from '@/modules/giras/giras.module';

@Module({
  imports: [
    HealthModule,
    UsersModule,
    AuthModule,
    CategoriesModule,
    LinesModule,
    GirasModule,
  ],
  controllers: [],
  providers: [],
})
export class SharedModule {}

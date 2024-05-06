import { Module } from '@nestjs/common';

import { HealthModule } from '@/modules/health/health.module';
import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { CategoriesModule } from '@/modules/categories/categories.module';

@Module({
  imports: [HealthModule, UsersModule, AuthModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class SharedModule {}

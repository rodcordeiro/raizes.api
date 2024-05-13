import { FastifyMulterModule } from '@nest-lab/fastify-multer';
import { Module } from '@nestjs/common';
import { UploadsCrontroller } from './controllers/upload.controller';
import { UploadsService } from './services/upload.services';

@Module({
  imports: [FastifyMulterModule],
  controllers: [UploadsCrontroller],
  providers: [UploadsService],
})
export class UploadsModule {}

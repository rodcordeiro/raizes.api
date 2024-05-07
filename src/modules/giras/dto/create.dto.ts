import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger';

const CreateGiraSchema = z.object({
  gira: z.string().date(),
  fechada: z.boolean(),
});

export class CreateGiraDTO extends createZodDto(CreateGiraSchema) {
  /**
   * Data da gira
   * @example 2024/05/04
   */
  @ApiProperty()
  date: string;
  /**
   * Se a gira foi fechada ou não
   * @example 2024/05/04
   */
  @ApiProperty()
  fechada: boolean;
}

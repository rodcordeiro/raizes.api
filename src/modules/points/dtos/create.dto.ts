import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger';

const CreatePointSchema = z.object({
  letra: z.string(),
  linha: z.number(),
  ritmo: z.number(),
  audio_url: z.string().url().optional(),
});

export class CreatePointDTO extends createZodDto(CreatePointSchema) {
  /**
   * Name of the category.
   * @example Logun Edé
   */
  @ApiProperty()
  letra: string;
}

import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger';

const CreateLineSchema = z.object({
  nome: z.string(),
  categoria: z.number(),
});

export class CreateLineDTO extends createZodDto(CreateLineSchema) {
  /**
   * Name of the category.
   * @example Logun Edé
   */
  @ApiProperty()
  nome: string;
  /**
   * Category of the line
   * @Example 1
   */
  categoria: number;
}

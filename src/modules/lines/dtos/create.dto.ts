import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger';

const CreateLineSchema = z.object({
  name: z.string(),
  category: z.number(),
});

export class CreateLineDTO extends createZodDto(CreateLineSchema) {
  /**
   * Name of the category.
   * @example Logun Edé
   */
  @ApiProperty()
  name: string;
  /**
   * Category of the line
   * @Example 1
   */
  category: number;
}

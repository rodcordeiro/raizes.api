import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger';

const CreateCategorySchema = z.object({
  name: z.string(),
});

export class CreateCategoryDTO extends createZodDto(CreateCategorySchema) {
  /**
   * Name of the category.
   * @example Orixá
   */
  @ApiProperty()
  name: string;
}

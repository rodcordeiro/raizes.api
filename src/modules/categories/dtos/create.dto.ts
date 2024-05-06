import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CreateCategorySchema = z.object({
  name: z.string(),
});

export class CreateCategoryDTO extends createZodDto(CreateCategorySchema) {}

import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { ApiProperty } from '@nestjs/swagger';

const AssignLineSchema = z.object({
  festa: z.boolean(),
  linha: z.number(),
});

export class AssignLineDTO extends createZodDto(AssignLineSchema) {
  
  /**
   * Se a gira foi festa para a linha
   * @example true
   */
  @ApiProperty()
  festa: boolean;
  /**
   * Linha tocada
   * @example 4
   */
  @ApiProperty()
  linha: number;
}

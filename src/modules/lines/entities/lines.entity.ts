import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '@/common/entities/base.entity';
import { CategoryEntity } from '@/modules/categories/entities/categories.entity';

@Entity('tb_linhas')
export class LineEntity extends BaseEntity {
  /** Columns */
  @Column()
  name: string;

  /** Joins */

  @ManyToOne(() => CategoryEntity, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({
    name: 'category',
    referencedColumnName: 'id',
  })
  category: number;

  /** Methods */
}

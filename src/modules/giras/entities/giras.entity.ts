import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '@/common/entities/base.entity';
import { LineEntity } from '@/modules/lines/entities/lines.entity';

@Entity('tb_giras')
export class GirasEntity extends BaseEntity {
  /** Columns */
  @Column()
  gira: string;

  @Column()
  fechada: boolean;

  /** Joins */
  @OneToMany(() => GirasLinhasEntity, linha => linha.gira)
  linhas?: GirasLinhasEntity[];

  /** Methods */
}

@Entity('tb_giras_linhas')
export class GirasLinhasEntity extends BaseEntity {
  /** Columns */
  @Column()
  festa: boolean;

  /** Joins */
  @ManyToOne(() => GirasEntity, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({
    name: 'gira',
    referencedColumnName: 'id',
  })
  gira: string;

  @ManyToOne(() => LineEntity, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({
    name: 'linha',
    referencedColumnName: 'id',
  })
  linha: string;

  /** Methods */
}

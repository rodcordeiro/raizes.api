import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TbCategories1714973328259 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_categorias',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_categorias');
  }
}

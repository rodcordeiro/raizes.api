import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class TipoPonto1720435074706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tb_pontos',
      new TableColumn({ name: 'tipo', type: 'varchar', isNullable: true }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('tb_pontos', 'tipo');
  }
}

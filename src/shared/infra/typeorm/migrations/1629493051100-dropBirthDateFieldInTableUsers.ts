import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class dropBirthDateFieldInTableUsers1629493051100
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'birthDate');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({ name: 'birthDate', type: 'varchar' }),
    );
  }
}

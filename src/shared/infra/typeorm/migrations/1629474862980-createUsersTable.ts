import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsersTable1629474862980 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'rg',
            type: 'varchar',
          },
          {
            name: 'organ',
            type: 'varchar',
          },
          {
            name: 'birthDate',
            type: 'varchar',
          },
          {
            name: 'age',
            type: 'numeric',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'userSuperAdmin',
            type: 'boolean',
            default: false,
          },
          {
            name: 'userAdmin',
            type: 'boolean',
            default: false,
          },
          {
            name: 'biography',
            type: 'varchar',
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

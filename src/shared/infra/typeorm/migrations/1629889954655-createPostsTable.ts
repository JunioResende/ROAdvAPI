import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createPostsTable1629889954655 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'post_title',
            type: 'varchar',
          },
          {
            name: 'posting',
            type: 'varchar',
          },
          {
            name: 'userID',
            type: 'uuid',
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
        foreignKeys: [
          {
            name: 'FKUserIDToPosts',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['userID'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts');
  }
}

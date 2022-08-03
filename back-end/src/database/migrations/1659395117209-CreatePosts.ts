import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePosts1659395117209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "posts",
          columns: [
            {
              name: 'id', 
              type: 'string', 
              isPrimary: true
            }, 
            {
              name: 'content', 
              type: 'string', 
              isPrimary: false
            }, 
            {
              name: 'name', 
              type: 'string', 
              isPrimary: false, 
            }, 
            {
              name: 'title', 
              type: 'string', 
              isPrimary: false,
            }, 
            {
              name: 'email', 
              type: 'string', 
              isPrimary: false,
            },
            {
              name: 'date',
              type: 'number',
              isPrimary: false,
            }
          ] 
        })
      ); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'users'
})
export class UserModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
    id: number;

  @Column
    name: string;

  @Column
    email: string;

  @Column
    password: string;

  @Column
    profile_picture: string;
}

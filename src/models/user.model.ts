import { Table, Model, Column, AllowNull } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
class User extends Model {
  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @Column
  email!: string;
}

export default User;

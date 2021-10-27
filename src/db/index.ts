import path from 'path';
import { Sequelize } from 'sequelize-typescript';

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: 'mysql',
  username: DB_USER,
  password: DB_PASSWORD,
  storage: ':memory:',
  models: [`${path.join(__dirname, '../models/**/*.model.js')}`],
  modelMatch: (filename, member) => filename.substring(0, filename.indexOf('.model')) === member.toLowerCase(),
});

export default sequelize;

import { resolve } from 'path';
import { DataSourceOptions } from 'typeorm';

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const NODE_ENV = process.env.NODE_ENV;

// const IS_DEV = NODE_ENV === `development`;
const IS_TEST = NODE_ENV === `test`;
const entitiesSource = IS_TEST ? `.` : `dist`;

// default directories
const ENTITIES_DIR = resolve(
  __dirname,
  entitiesSource,
  'src',
  '**',
  'entities',
  '*.entity.{ts,js}',
);
// const SEED_PROD_DIR = resolve(
//   __dirname,
//   entitiesSource,
//   'seeds',
//   'prod',
//   '*.{ts,js}',
// );
// const SEED_DEV_DIR = resolve(
//   __dirname,
//   entitiesSource,
//   'seeds',
//   'dev',
//   '*.{ts,js}',
// );

// const SEED_DIR = IS_DEV ? SEED_DEV_DIR : SEED_PROD_DIR;
console.log('checking MYSQL_HOST: ', MYSQL_HOST);
console.log('checking MYSQL_PORT: ', MYSQL_PORT);

export const ormConfig: DataSourceOptions = {
  type: `mysql`,
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT),
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  synchronize: true,
  entities: [ENTITIES_DIR],
  // seeds: [SEED_DIR],
};

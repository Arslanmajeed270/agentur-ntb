import { resolve } from 'path';
import { registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { ConfigEnum } from '@lib/types';

// default directories
const ENTITIES_DIR = resolve(
  __dirname,
  'src',
  '**',
  'entities',
  '*.entity.{ts,js}',
);
// const SEED_PROD_DIR = resolve(__dirname, 'seeds', 'prod', '*.{ts,js}');
// const SEED_DEV_DIR = resolve(__dirname, 'seeds', 'dev', '*.{ts,js}');

// const SEED_DIR = NODE_ENV === 'development' ? SEED_DEV_DIR : SEED_PROD_DIR;

export default registerAs(
  ConfigEnum.TYPEORM,
  (): DataSourceOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'agentur',
    synchronize: process.env.NODE_ENV !== 'prod',
    // logging: true,
    entities: [ENTITIES_DIR],
  }),
);

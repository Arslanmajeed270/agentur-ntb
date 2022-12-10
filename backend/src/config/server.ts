import { registerAs } from '@nestjs/config';
import { ConfigEnum } from '.';

export interface IServerConfig {
  port: number;
}

export const serverConfig = registerAs(ConfigEnum.SERVER, () => ({
  port: parseInt(process.env.BACKEND_APP_PORT) || 5000,
}));

import { DocumentBuilder } from '@nestjs/swagger';
// import { version } from '../../../package.json';
export const SWAGGER_TITLE = process.env.SWAGGER_TITLE || 'Agentur NTB';
export const SWAGGER_DESCRIPTION =
  process.env.SWAGGER_DESCRIPTION || "Agentur NTB Rest api's documentation";
export const SWAGGER_VERSION = '1.0';

export const swaggerConfig = new DocumentBuilder()
  .setTitle(SWAGGER_TITLE)
  .setDescription(SWAGGER_DESCRIPTION)
  .setVersion(SWAGGER_VERSION)
  .build();

import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { IServerConfig } from '@config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  const configService = app.get<ConfigService>(ConfigService);
  const serverConfig = configService.get<ConfigService>(ConfigService);

  // swagger configuration
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(BACKEND_APP_PORT);
  logger.log(`Server is running on: ${await app.getUrl()}`);
}
bootstrap();

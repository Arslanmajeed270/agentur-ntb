import { Module } from '@nestjs/common';

// config imports
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

// config imports files
import typeormConfig from './config/orm.config';
import serverConfig from './config/server.config';
import swaggerConfig from './config/swagger.config';

// Module imports
import { AuthModule } from './auth/auth.module';
import { ConfigEnum } from '@lib/types';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig, serverConfig, swaggerConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        await configService.get<Promise<TypeOrmModuleOptions>>(
          ConfigEnum.TYPEORM,
        ),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3000,'0.0.0.0');

}
bootstrap().catch((e) => console.log(e));

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // 정확히 이대로 설정 (정적파일 제공)
  app.useStaticAssets(join(process.cwd(), 'client/build'), {
    index: 'index.html',
    prefix: '/',
  });

  await app.listen(process.env.PORT || 3001);
}
bootstrap();

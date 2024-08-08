import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow all methods
    allowedHeaders: 'Content-Type, Accept', // Allow specific headers
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  });
  await app.listen(3000);
}
bootstrap();

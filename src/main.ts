import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true, // allow the Expo web frontend to call the API
  });
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

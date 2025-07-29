import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(process.env.PORT ?? 4000);
=======
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(6000);
>>>>>>> 92edbabdb8a163cd4b6521e874985abf58845f20
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
=======
<<<<<<< HEAD
  //app.useGlobalPipes(new ValidationPipe());
=======
<<<<<<< HEAD
>>>>>>> c1bef81a1f686f02094b22388881f7a87dd260fa
  await app.listen(process.env.PORT ?? 4000);
  app.useGlobalPipes(new ValidationPipe());
>>>>>>> 5f8752b0b49f8935624a0ef16ebe80ee1b74fdea
  await app.listen(6000);
}
bootstrap();

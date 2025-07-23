import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { teachersModule } from './Teachers/teachers.module'; 

@Module({
  imports: [teachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

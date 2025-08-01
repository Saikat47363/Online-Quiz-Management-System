import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { studentsModule } from './students/students.module';
@Module({
  imports: [studentsModule],
import { AdminModule } from './Admin/admin.module';
@Module({
  imports: [AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

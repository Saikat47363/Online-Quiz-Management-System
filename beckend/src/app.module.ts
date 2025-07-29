import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { studentsModule } from './students/students.module';
@Module({
  imports: [studentsModule],
=======
import { AdminModule } from './Admin/admin.module';
@Module({
  imports: [AdminModule],
>>>>>>> 92edbabdb8a163cd4b6521e874985abf58845f20
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

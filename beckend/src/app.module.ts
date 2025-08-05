import { Module } from '@nestjs/common';
 import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { studentsModule } from './students/students.module';
@Module({
  imports: [studentsModule, TypeOrmModule.forRoot(
 { type: 'postgres',
 host: 'localhost',
 port: 5432,
 username: 'postgres',
 password: '1234',
 database: 'online_quiz',
 autoLoadEntities: true,
 synchronize: true,
 } ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

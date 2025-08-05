import { Module } from '@nestjs/common';
<<<<<<< HEAD
 import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { studentsModule } from './students/students.module';
@Module({
  imports: [studentsModule, TypeOrmModule.forRoot(
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { teachersModule } from './Teachers/teachers.module'; 
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
<<<<<<< HEAD
  imports: [teachersModule,TypeOrmModule.forRoot(
{ type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: '12345678',
database: 'online_quiz',

autoLoadEntities: true,
synchronize: true,
} ),],
=======
  imports: [studentsModule],
import { AdminModule } from './Admin/admin.module';
@Module({
  imports: [AdminModule, TypeOrmModule.forRoot(
>>>>>>> c1bef81a1f686f02094b22388881f7a87dd260fa
 { type: 'postgres',
 host: 'localhost',
 port: 5432,
 username: 'postgres',
<<<<<<< HEAD
 password: '1234',
 database: 'online_quiz',
 autoLoadEntities: true,
 synchronize: true,
 } ),],
=======
 password: '5848',
 database: 'online_quiz',//Change to your database name
 autoLoadEntities: true,
 synchronize: true,
 } )],
>>>>>>> fece0fd2a8490ddfab881975c11cf14ec10ceb1b
>>>>>>> c1bef81a1f686f02094b22388881f7a87dd260fa
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule {}

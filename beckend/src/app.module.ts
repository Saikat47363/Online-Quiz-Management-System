import { Module } from '@nestjs/common';
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
 { type: 'postgres',
 host: 'localhost',
 port: 5432,
 username: 'postgres',
 password: '5848',
 database: 'online_quiz',//Change to your database name
 autoLoadEntities: true,
 synchronize: true,
 } )],
>>>>>>> fece0fd2a8490ddfab881975c11cf14ec10ceb1b
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule {}

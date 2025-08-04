import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

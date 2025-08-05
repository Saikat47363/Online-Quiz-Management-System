import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { studentsController } from './students.controller';
import { studentsService } from './students.service';
import { Students } from './students.entity';
import { PdfFilePipe } from './pipes/pdf_file.pipe'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Students]), 
  ],
  controllers: [studentsController],
  providers: [studentsService, PdfFilePipe], 
})
export class studentsModule {}


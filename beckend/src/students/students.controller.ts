import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { studentsService } from './students.service';
import { CreateStudentDto } from './dto/students.dto';
import { PdfFilePipe } from './pipes/pdf_file.pipe';
import { Students } from './students.entity';

@Controller('students')
export class studentsController {
  constructor(private readonly studentsService: studentsService) {}

  
  @Get('all')
  async getstudents(): Promise<Students[]> {
    return await this.studentsService.getstudents();
  }


  @Get()
  async getstudentsbyNameandID(
    @Query('name') name: string,
    @Query('id') id: number
  ): Promise<object> {
    return await this.studentsService.getstudentsByNameandID(name, id);
  }

 
  @Get('null-fullnames')
  async getstudentsWithNullName(): Promise<Students[]> {
    return await this.studentsService.getstudentsWithNullName();
  }

 
  @Post('addstudents')
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async addstudents(
    @Body() studentsdata: CreateStudentDto,
    @UploadedFile(PdfFilePipe) file: Express.Multer.File
  ): Promise<Students> {
    const dataToSave = {
      fullName: studentsdata.fullName,
      phone: parseInt(studentsdata.phone),
      isActive: true,
    };

    return await this.studentsService.addstudents(dataToSave);
  }

  
  @Delete('delete/:id')
  async deletestudents(@Param('id') id: number): Promise<string> {
    return await this.studentsService.deletestudents(id);
  }

  
  @Put('edit/:id')
  async editstudents(
    @Param('id') id: number,
    @Body() updatedData: Partial<Students>
  ): Promise<string> {
    return await this.studentsService.editstudents(id, updatedData);
  }

  
  @Put('update-phone/:id')
  async updatePhoneNumber(
    @Param('id') id: number,
    @Body('phone') phone: string
  ): Promise<string> {
    
    if (!phone || !/^01\d{9}$/.test(phone)) {
      throw new BadRequestException(
        'Invalid phone number. Must start with 01 and be 11 digits.'
      );
    }

    return await this.studentsService.editstudents(id, {
      phone: parseInt(phone),
    });
  }
}

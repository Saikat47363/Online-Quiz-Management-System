import {
  Body,Controller,Delete,Get,Param,Post,Put,Query,UploadedFile,UseInterceptors,UsePipes,ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { studentsService } from './students.service';
import { CreateStudentDto } from './dto/students.dto';
import { PdfFilePipe } from './pipes/pdf_file.pipe';


 

@Controller('students')
export class studentsController {
  constructor(private readonly studentsService: studentsService) {}

  @Get('all')
  getstudents() {
    return this.studentsService.getstudents();
  }

  @Get()
  getstudentsbyNameandID(@Query('name') name: string, @Query('id') id: number): object {
    return this.studentsService.getstudentsByNameandID(name, id);
  }

  @Post('addstudents')
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(new ValidationPipe({ whitelist: true }))
  addstudents(
    @Body() studentsdata: CreateStudentDto,
    @UploadedFile(PdfFilePipe) file: Express.Multer.File
  ): object {
    return this.studentsService.addstudents({ ...studentsdata, file });
  }

  @Delete('delete/:id')
  deletestudents(@Param('id') id: number): string {
    return this.studentsService.deletestudents(id);
  }

  @Put('edit/:id')
  editstudents(@Param('id') id: number, @Body() updatedData: object): string {
    return this.studentsService.editstudents(id, updatedData);
  }
}

import {Body,Controller,Delete,Get,Param,Post,Put,Query,} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/admin.dto';
import { ValidationPipe } from "@nestjs/common";
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
 
  @Get('all')
  getAdmin() {
    return this.adminService.getAdmin();
  }
 
  @Get()
  getAdminByNameAndID(
    @Query('name') name: string,
    @Query('id') id: number,
  ): object {
    return this.adminService.getAdminByNameandID(name, id);
  }
 
  @Post('addadmin')
  addAdmin(@Body(new ValidationPipe()) admindata: CreateAdminDto): object {
    return this.adminService.addAdmin(admindata);
  }
 
  @Delete('delete/:id')
  deleteAdmin(@Param('id') id: number): string {
    return this.adminService.deleteAdmin(id);
  }
 
  @Put('edit/:id')
  editAdmin(
    @Param('id') id: number,
    @Body() updatedData: CreateAdminDto,
  ): string {
    return this.adminService.editAdmin(id, updatedData);
  }
}
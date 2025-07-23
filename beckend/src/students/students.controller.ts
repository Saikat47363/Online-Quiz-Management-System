import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { studentsService } from "./students.service";

@Controller("students")
export class studentsController{
    constructor(private readonly studentsService:studentsService)
    {}

    @Get('all')
    getstudents(){
        return this.studentsService.getstudents();
    }
    getstudentsbyNameandID(@Query('name') name:string ,@Query('id') id:number): object {
return this.studentsService.getstudentsByNameandID(name,id);
    }

    @Post("addstudents")
   addstudents(@Body() studentsdata: object)  : object{
    return this.studentsService.addstudents(studentsdata);
   }
  
  
    @Delete('delete/:id')
    deletestudents(@Param('id') id: number): String {
        return this.studentsService.deletestudents(id);
    }


    @Put('edit/:id')
    editstudents(@Param('id') id: number, @Body() updatedData: object): String {
        return this.studentsService.editstudents(id, updatedData);
    }
}

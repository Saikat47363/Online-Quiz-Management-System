import { Body, Controller, Get, Post, Query } from "@nestjs/common";
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
}
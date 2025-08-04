import { Body, Controller, Get, Post, Query ,Delete,Put,Param} from "@nestjs/common";
import { teachersService } from "./teachers.service";
import { CreateTeacherDto } from "./dto/teacher.dto";
import { ValidationPipe } from "@nestjs/common";

@Controller("teachers")
export class teachersController{
    constructor(private readonly teachersService:teachersService)
    {}

    @Get('all')
    getteachers(){
        return this.teachersService.getteachers();
    }
    @Get()
    getteachersbyNameandID(@Query('name') name:string ,@Query('id') id:number): object {
return this.teachersService.getteachersByNameandID(name,id);
    }

@Post("addteachers")
    addteachers(@Body(new ValidationPipe()) teachersdata: CreateTeacherDto): object {
        return this.teachersService.addteachers(teachersdata);
    }


   @Delete('delete/:id')
    deleteteachers(@Param('id') id: number): String {
        return this.teachersService.deleteteachers(id);
    }
    


    @Put('edit/:id')
    editteachers(@Param('id') id: number, @Body() updatedData: object): String {
        return this.teachersService.editteachers(id, updatedData);
    }
}
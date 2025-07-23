import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller("admin")
export class AdminController{
    constructor(private readonly adminService:AdminService)
    {}

    @Get('all')
    getAdmin(){
        return this.adminService.getAdmin();
    }
    getAdminbyNameandID(@Query('name') name:string ,@Query('id') id:number): object {
return this.adminService.getAdminByNameandID(name,id);
    }

    @Post("addadmin")
   addAdmin(@Body() admindata: object)  : object{
    return this.adminService.addAdmin(admindata);
   }
   @Delete('delete/:id')
    deleteAdmin(@Param('id') id: number): String {
        return this.adminService.deleteAdmin(id);
    }
    
    @Delete('deleteAll')
    declareAllAdmins(@Param('id')id :number): String {
        return "checking delete all admins";
    }

    @Put('edit/:id')
    editAdmin(@Param('id') id: number, @Body() updatedData: object): String {
        return this.adminService.editAdmin(id, updatedData);
    }
}
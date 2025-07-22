import { Body, Controller, Get, Post, Query } from "@nestjs/common";
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
}

import { Module } from "@nestjs/common";
import { studentsController } from "./students.controller";
import { studentsService } from "./students.service";

@Module({
    imports: [],
    controllers: [studentsController],
    providers: [studentsService],
})
export class studentsModule{}
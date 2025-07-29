
import { Module } from "@nestjs/common";
import { teachersController } from "./teachers.controller";
import { teachersService } from "./teachers.service";

@Module({
    imports: [],
    controllers: [teachersController],
    providers: [teachersService],
})
export class teachersModule{}
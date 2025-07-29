import { IsString, Matches, MinLength, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { Express } from 'express';

export class CreateStudentDto {
  @IsString()
  @Matches(/^[A-Za-z\s]+$/, { message: 'Name must not contain special characters' })
  name: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  password: string;

  @IsString()
  @Matches(/^01\d{9}$/, { message: 'Phone number must start with 01 and be 11 digits' })
  phone: string;

  @Type(() => Object)
  @IsOptional()
  file?: Express.Multer.File;
}

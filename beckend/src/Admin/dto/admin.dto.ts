import { IsString, MaxLength, IsInt, Min, IsIn,IsOptional } from 'class-validator';
 
export class AdminDto {
  @IsString()
  @MaxLength(100)
  fullName: string;
 
  @IsInt()
  @Min(0)
  age: number;
 
 @IsOptional()
  @IsIn(['active', 'inactive'])
  status?: 'active' | 'inactive';

  
}
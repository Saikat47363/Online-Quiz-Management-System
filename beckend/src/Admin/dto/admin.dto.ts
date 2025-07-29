import {
  IsEmail,
  Matches,
  IsIn,
  IsNumberString,
  MinLength,
} from 'class-validator';
 
export class CreateAdminDto {
  @IsEmail({}, { message: 'Email must be valid' })
  @Matches(/^[a-zA-Z0-9._%+-]+@aiub\.edu$/, {
    message: 'Email must be an AIUB email (e.g., name@aiub.edu)',
  })
  email: string;
 
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @Matches(/^(?=.*[A-Z]).+$/, {
    message: 'Password must contain at least one uppercase letter',
  })
  password: string;
 
  @IsIn(['male', 'female'], {
    message: 'Gender must be either male or female',
  })
  gender: string;
 
  @IsNumberString({}, {
    message: 'Phone number must contain only numbers',
  })
  phone: string;
}
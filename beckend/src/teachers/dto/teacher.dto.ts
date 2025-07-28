
import {IsString,Matches,IsNotEmpty,IsDateString,IsUrl,} from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  @Matches(/^[A-Za-z\s]+$/, {
    message: 'Name should only contain letters and spaces',
  })
  name: string;

  @IsNotEmpty({ message: 'Password is required' })
  @Matches(/[@#$&]/, {
    message: 'Password must contain at least one special character (@, #, $ or &)',
  })
  password: string;

  @IsDateString({}, { message: 'Date must be a valid date string' })
  dateOfJoining: string;

  @IsUrl({}, { message: 'Social media link must be a valid URL' })
  socialLink: string;
}

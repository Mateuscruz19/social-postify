import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  avatar: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
  })
  @MaxLength(20)
  password: string;
}

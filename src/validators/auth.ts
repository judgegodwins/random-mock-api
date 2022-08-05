/* eslint-disable max-classes-per-file */
import {
  IsOptional,
  IsString,
  MinLength,
  IsEmail,
  IsNotEmpty,
  IsEnum,
  IsUUID,
  MaxLength
} from 'class-validator';

export class RegisterRequest {

  @IsString()
  @MinLength(5, { message: 'username should be up to 5 characters long' })
  @MaxLength(20, { message: 'username cannot be more than 20 characters long' })
  username: string;

  @IsString()
  @MinLength(6, {
    message: 'Password should contain at least 6 characters',
  })
  password: string;
}
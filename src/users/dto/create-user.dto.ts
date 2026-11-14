import { isEmail, IsEmail, IsEnum, IsNotEmpty, isNotEmpty, IsString, isStrongPassword, IsStrongPassword } from "class-validator";
//DTO Data Transfer Object is 
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    lastname:string;
    @IsEmail()
    email: string;

    @IsStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })

  @IsNotEmpty()
  @IsString()
    password:string;
}

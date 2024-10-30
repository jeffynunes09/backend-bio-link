import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
 
  @ApiProperty({
      description:"Email do usuario",
      example:"teste@gmail.com"
     
  })    
  email: string;


  @ApiProperty({
      description:"Nome do usuario",
      example:"Jefferson Nunes"
     
  })    
  name:string;
 
}



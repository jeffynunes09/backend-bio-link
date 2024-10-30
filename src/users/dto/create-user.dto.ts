import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
 
  @ApiProperty({
      description:"The email of User",
      example:"teste@gmail.com"
     
  })    
  email: string;


  @ApiProperty({
      description:"The name of User",
      example:"Jefferson Nunes"
     
  })    
  name:string;
 
}



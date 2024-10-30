import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags("user")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {

    try {

      const user = await this.usersService.create(createUserDto);

      if (user) {

        return {
          message: `Usuario ${user.name} criado com sucesso!`,
          user: {
            name: user.name,
            email: user.email,
          },
        };
      }
    } catch (error) {

      console.log(`Erro ao criar usuario : ${error.message}`);
      return { message: `Erro ao criar usuário,${error.message}` };
    }
  }
}

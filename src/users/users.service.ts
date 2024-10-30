import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) :Promise<CreateUserDto> {

    try {

      const user = await this.prisma.user.create({
        data: { ...createUserDto },
      });

      if (user) {

        return user;
      }

    } catch (error) {

      console.log(`Erro ao criar usuario : ${error.message}`);

      throw new InternalServerErrorException('Falha ao criar usuario');
    }
  }
}

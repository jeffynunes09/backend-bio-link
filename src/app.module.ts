import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PrismaService } from './db/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }), UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

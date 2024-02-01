import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [FuncionarioModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

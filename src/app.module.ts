import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';

@Module({
  imports: [FuncionarioModule, FornecedorModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

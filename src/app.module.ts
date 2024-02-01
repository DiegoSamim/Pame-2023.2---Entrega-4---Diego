import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { EntradaDeProdutoModule } from './entrada_de_produto/entrada_de_produto.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [FuncionarioModule, FornecedorModule, EntradaDeProdutoModule, CategoriaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

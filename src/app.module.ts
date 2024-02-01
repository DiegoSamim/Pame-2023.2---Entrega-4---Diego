import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { EntradaDeProdutoModule } from './entrada_de_produto/entrada_de_produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { EstoqueModule } from './estoque/estoque.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [FuncionarioModule, FornecedorModule, EntradaDeProdutoModule, CategoriaModule, EstoqueModule, ProdutoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

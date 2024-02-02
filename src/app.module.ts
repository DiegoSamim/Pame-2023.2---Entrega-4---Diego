import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { EntradaDeProdutoModule } from './entrada_de_produto/entrada_de_produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { EstoqueModule } from './estoque/estoque.module';
import { ProdutoModule } from './produto/produto.module';
import { EncomendaDeIngredientesModule } from './encomenda_de_ingredientes/encomenda_de_ingredientes.module';
import { SaidaDeProdutoModule } from './saida_de_produto/saida_de_produto.module';

@Module({
  imports: [FuncionarioModule, FornecedorModule, EntradaDeProdutoModule, CategoriaModule, EstoqueModule, ProdutoModule, EncomendaDeIngredientesModule, SaidaDeProdutoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

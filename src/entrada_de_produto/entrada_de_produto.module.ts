import { Module } from '@nestjs/common';
import { EntradaDeProdutoService } from './entrada_de_produto.service';
import { EntradaDeProdutoController } from './entrada_de_produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EncomendaDeIngredientesService } from 'src/encomenda_de_ingredientes/encomenda_de_ingredientes.service';

@Module({
  controllers: [EntradaDeProdutoController],
  providers: [EntradaDeProdutoService, PrismaService, EncomendaDeIngredientesService],
})
export class EntradaDeProdutoModule {}

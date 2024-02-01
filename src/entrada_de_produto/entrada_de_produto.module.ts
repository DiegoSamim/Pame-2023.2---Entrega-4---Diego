import { Module } from '@nestjs/common';
import { EntradaDeProdutoService } from './entrada_de_produto.service';
import { EntradaDeProdutoController } from './entrada_de_produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EntradaDeProdutoController],
  providers: [EntradaDeProdutoService, PrismaService],
})
export class EntradaDeProdutoModule {}

import { Module } from '@nestjs/common';
import { SaidaDeProdutoService } from './saida_de_produto.service';
import { SaidaDeProdutoController } from './saida_de_produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SaidaDeProdutoController],
  providers: [SaidaDeProdutoService, PrismaService],
})
export class SaidaDeProdutoModule {}

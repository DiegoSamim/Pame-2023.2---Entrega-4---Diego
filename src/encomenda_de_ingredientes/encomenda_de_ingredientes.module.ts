import { Module } from '@nestjs/common';
import { EncomendaDeIngredientesService } from './encomenda_de_ingredientes.service';
import { EncomendaDeIngredientesController } from './encomenda_de_ingredientes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EncomendaDeIngredientesController],
  providers: [EncomendaDeIngredientesService, PrismaService],
})
export class EncomendaDeIngredientesModule {}

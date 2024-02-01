import { Injectable } from '@nestjs/common';
import { CreateEncomendaDeIngredienteDto } from './dto/create-encomenda_de_ingrediente.dto';
import { UpdateEncomendaDeIngredienteDto } from './dto/update-encomenda_de_ingrediente.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EncomendaDeIngredientesService {
  constructor(private readonly prisma: PrismaService) {} // Injeta o serviço Prisma para interagir com o banco de dados

  async create(createEncomendaDeIngredienteDto: CreateEncomendaDeIngredienteDto) {
    // Cria uma nova encomenda de ingrediente usando o Prisma
    await this.prisma.encomenda_de_Ingrediente.create({ data: createEncomendaDeIngredienteDto });
    return 'Nova encomenda de ingrediente adicionada com sucesso'; // Retorna uma mensagem indicando que a encomenda foi adicionada
  }

  async findAll() {
    return this.prisma.encomenda_de_Ingrediente.findMany(); // Retorna todas as encomendas de ingredientes do banco de dados
  }

  async findOne(id: number) {
    return this.prisma.encomenda_de_Ingrediente.findUnique({ where: { id } }); // Retorna uma encomenda de ingrediente específica pelo ID
  }

  async update(id: number, updateEncomendaDeIngredienteDto: UpdateEncomendaDeIngredienteDto) {
    // Verifique se a data de validade foi fornecida no DTO de atualização
    if (updateEncomendaDeIngredienteDto.data_de_validade) {
      // Converta a data de validade para o formato desejado
      const dataDeValidadeFormatada = new Date(updateEncomendaDeIngredienteDto.data_de_validade);

      // Atualize a encomenda de ingrediente pelo ID usando os dados do DTO de atualização
      await this.prisma.encomenda_de_Ingrediente.update({
        where: { id },
        data: {
          data_de_validade: dataDeValidadeFormatada, // Atribua a data de validade formatada
        },
      });
    } else {
      await this.prisma.encomenda_de_Ingrediente.update({ where: { id }, data: updateEncomendaDeIngredienteDto });
    }

    return `Encomenda de ingrediente com ID ${id} atualizada com sucesso`;
  }

  async remove(id: number) {
    // Remove a encomenda de ingrediente pelo ID do banco de dados
    await this.prisma.encomenda_de_Ingrediente.delete({ where: { id } });
    return `Encomenda de ingrediente com id: ${id} removida do banco de dados`; // Retorna uma mensagem indicando que a encomenda foi removida
  }
}

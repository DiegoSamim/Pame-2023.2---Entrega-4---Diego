import { Injectable } from '@nestjs/common';
import { CreateSaidaDeProdutoDto } from './dto/create-saida_de_produto.dto';
import { UpdateSaidaDeProdutoDto } from './dto/update-saida_de_produto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SaidaDeProdutoService {
  constructor(private readonly prisma: PrismaService) {} // Injeta o serviço Prisma para interagir com o banco de dados

  async create(createSaidaDeProdutoDto: CreateSaidaDeProdutoDto) {
    // Cria uma nova saída de produto usando o Prisma
    await this.prisma.saida_de_Produto.create({ data: createSaidaDeProdutoDto });
    return 'Nova saída de produto adicionada com sucesso'; // Retorna uma mensagem indicando que a saída de produto foi adicionada
  }

  async findAll() {
    return this.prisma.saida_de_Produto.findMany(); // Retorna todas as saídas de produto do banco de dados
  }

  async findOne(id: number) {
    return this.prisma.saida_de_Produto.findUnique({ where: { id } }); // Retorna uma saída de produto específica pelo ID
  }

  async update(id: number, updateSaidaDeProdutoDto: UpdateSaidaDeProdutoDto) {
    // Atualiza a saída de produto pelo ID usando os dados do DTO de atualização
    await this.prisma.saida_de_Produto.update({ where: { id }, data: updateSaidaDeProdutoDto });
    return `Saída de produto com ID ${id} atualizada com sucesso`; // Retorna uma mensagem indicando que a saída de produto foi atualizada
  }

  async remove(id: number) {
    // Remove a saída de produto pelo ID do banco de dados
    await this.prisma.saida_de_Produto.delete({ where: { id } });
    return `Saída de produto com ID ${id} removida do banco de dados`; // Retorna uma mensagem indicando que a saída de produto foi removida
  }
}

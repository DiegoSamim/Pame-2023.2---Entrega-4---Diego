import { Injectable } from '@nestjs/common';
import { CreateEntradaDeProdutoDto } from './dto/create-entrada_de_produto.dto';
import { UpdateEntradaDeProdutoDto } from './dto/update-entrada_de_produto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EntradaDeProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  // Método para criar uma nova entrada de produto
  async create(createEntradaDeProdutoDto: CreateEntradaDeProdutoDto) {
    // Cria uma nova entrada de produto usando o Prisma
    await this.prisma.entrada_de_Produto.create({ data: createEntradaDeProdutoDto });
    return 'Nova entrada de produto adicionada com sucesso'; // Retorna uma mensagem de sucesso
  }

  // Método para buscar todas as entradas de produto
  async findAll() {
    return this.prisma.entrada_de_Produto.findMany(); // Retorna todas as entradas de produto do banco de dados
  }

  // Método para buscar uma única entrada de produto pelo ID
  async findOne(id: number) {
    return this.prisma.entrada_de_Produto.findUnique({ where: { id } }); // Retorna uma entrada de produto com o ID fornecido
  }

  // Método para atualizar as informações de uma entrada de produto existente
  async update(id: number, updateEntradaDeProdutoDto: UpdateEntradaDeProdutoDto) {
    // Atualiza as informações da entrada de produto com o ID fornecido
    await this.prisma.entrada_de_Produto.update({ where: { id }, data: updateEntradaDeProdutoDto });
    return `Entrada de produto com ID ${id} atualizada com sucesso`; // Retorna uma mensagem de sucesso
  }

  // Método para remover uma entrada de produto pelo ID
  async remove(id: number) {
    // Remove a entrada de produto com o ID fornecido
    await this.prisma.entrada_de_Produto.delete({ where: { id } });
    // Retorna uma mensagem indicando que a entrada de produto foi removida com sucesso
    return `Entrada de produto removida do banco de dados`;
  }
}


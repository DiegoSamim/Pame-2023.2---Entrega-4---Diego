import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EstoqueService {
  constructor(private readonly prisma: PrismaService) {} // Injetando o serviço Prisma para interagir com o banco de dados

  async create(createEstoqueDto: CreateEstoqueDto) {
    // Método para criar um novo item de estoque
    await this.prisma.estoque.create({ data: createEstoqueDto }); // Cria um novo item de estoque no banco de dados usando o Prisma
    return 'Novo item de estoque adicionado com sucesso';
  }

  async findAll() {
    // Método para buscar todos os itens de estoque
    return this.prisma.estoque.findMany(); // Retorna todos os itens de estoque do banco de dados usando o Prisma
  }

  async findOne(id: number) {
    // Método para buscar um item de estoque pelo ID
    return this.prisma.estoque.findUnique({ where: { id } }); // Retorna um item de estoque específico pelo ID usando o Prisma
  }

  async update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    // Método para atualizar um item de estoque pelo ID
    await this.prisma.estoque.update({ where: { id }, data: updateEstoqueDto }); // Atualiza um item de estoque específico pelo ID usando o Prisma
    return `Item de estoque com ID ${id} atualizado com sucesso`;
  }

  async remove(id: number) {
    // Método para remover um item de estoque pelo ID
    const estoqueItem = await this.prisma.estoque.findUnique({ // Busca o item de estoque pelo ID
      where: { id },
      select: { id_produto: true } // Seleciona apenas o ID do produto associado ao item de estoque
    });

    await this.prisma.estoque.delete({ where: { id } }); // Remove o item de estoque do banco de dados usando o Prisma
    return `Item de estoque associado ao produto de ID ${estoqueItem.id_produto} removido do banco de dados`;
  }
}



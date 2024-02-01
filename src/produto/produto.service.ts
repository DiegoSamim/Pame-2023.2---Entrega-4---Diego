import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {} // Injetando o serviço Prisma para interagir com o banco de dados

  async create(createProdutoDto: CreateProdutoDto) {
    // Método para criar um novo produto
    await this.prisma.produto.create({ data: createProdutoDto }); // Cria um novo produto no banco de dados usando o Prisma
    return 'Novo produto adicionado com sucesso';
  }

  async findAll() {
    // Método para buscar todos os produtos
    return this.prisma.produto.findMany(); // Retorna todos os produtos do banco de dados usando o Prisma
  }

  async findOne(id: number) {
    // Método para buscar um produto pelo ID
    return this.prisma.produto.findUnique({ where: { id } }); // Retorna um produto específico pelo ID usando o Prisma
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    // Método para atualizar um produto pelo ID
    await this.prisma.produto.update({ where: { id }, data: updateProdutoDto }); // Atualiza um produto específico pelo ID usando o Prisma
    return `Produto com ID ${id} atualizado com sucesso`;
  }

  async remove(id: number) {
    // Método para remover um produto pelo ID
    const produto = await this.prisma.produto.findUnique({ // Busca o produto pelo ID
      where: { id },
      select: { nome_produto: true } // Seleciona apenas o nome do produto
    });

    await this.prisma.produto.delete({ where: { id } }); // Remove o produto do banco de dados usando o Prisma
    return `Produto ${produto.nome_produto} removido do banco de dados`;
  }
}

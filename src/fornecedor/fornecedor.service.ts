import { Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FornecedorService {
  constructor(private readonly prisma: PrismaService) {}

  // Método para criar um novo fornecedor
  async create(createFornecedorDto: CreateFornecedorDto) {
    // Cria um novo fornecedor usando o Prisma
    await this.prisma.fornecedor.create({ data: createFornecedorDto });
    return 'Fornecedor criado com sucesso'; // Retorna uma mensagem de sucesso
  }

  // Método para buscar todos os fornecedores
  findAll() {
    return this.prisma.fornecedor.findMany(); // Retorna todos os fornecedores do banco de dados
  }

  // Método para buscar um único fornecedor pelo ID
  findOne(id: number) {
    return this.prisma.fornecedor.findUnique({ where: { id } }); // Retorna um fornecedor com o ID fornecido
  }

  // Método para atualizar as informações de um fornecedor existente
  async update(id: number, updateFornecedorDto: UpdateFornecedorDto) {
    // Atualiza as informações do fornecedor com o ID fornecido
    await this.prisma.fornecedor.update({ where: { id }, data: updateFornecedorDto });
    return `Fornecedor com ID ${id} atualizado com sucesso`; // Retorna uma mensagem de sucesso
  }

  // Método para remover um fornecedor pelo ID
  async remove(id: number) {
    // Encontra o fornecedor pelo ID
    const fornecedor = await this.prisma.fornecedor.findUnique({
      where: { id },
      select: { nome_fornecedor: true }
    });

    // Remove o fornecedor com o ID fornecido
    await this.prisma.fornecedor.delete({ where: { id } });
    // Retorna uma mensagem indicando que o fornecedor foi deletado com sucesso
    return `Fornecedor ${fornecedor.nome_fornecedor} removido do banco de dados`;
  }
}

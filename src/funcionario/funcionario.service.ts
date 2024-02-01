import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prisma: PrismaService) {}

  // Método para criar um novo funcionário
  async create(createFuncionarioDto: CreateFuncionarioDto) {
    // Cria um novo funcionário usando o Prisma
    await this.prisma.funcionario.create({ data: createFuncionarioDto });
    return 'Funcionário criado com sucesso'; // Retorna uma mensagem de sucesso
  }

  // Método para buscar todos os funcionários
  findAll() {
    return this.prisma.funcionario.findMany(); // Retorna todos os funcionários do banco de dados
  }

  // Método para buscar um único funcionário pelo ID
  findOne(id: number) {
    return this.prisma.funcionario.findUnique({ where: { id } }); // Retorna um funcionário com o ID fornecido
  }

  // Método para atualizar as informações de um funcionário existente
  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    // Atualiza as informações do funcionário com o ID fornecido
    await this.prisma.funcionario.update({ where: { id }, data: updateFuncionarioDto });
    return `Funcionário com ID ${id} atualizado com sucesso`; // Retorna uma mensagem de sucesso
  }

  // Método para remover um funcionário pelo ID
  async remove(id: number) {
    // Encontra o funcionário pelo ID e seleciona o nome
    const funcionario = await this.prisma.funcionario.findUnique({
      where: { id },
      select: { nome: true }
    });

    // Remove o funcionário com o ID fornecido
    await this.prisma.funcionario.delete({ where: { id } });
    // Retorna uma mensagem indicando que o funcionário foi deletado com sucesso
    return `Funcionário(a) ${funcionario.nome} deletado do banco de dados`;
  }
}

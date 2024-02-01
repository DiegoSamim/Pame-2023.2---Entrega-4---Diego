import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prisma: PrismaService){
  }

  async create(createFuncionarioDto: CreateFuncionarioDto) {
    await this.prisma.funcionario.create({ data: createFuncionarioDto });
    return 'Funcionário criado com sucesso';
  }

  findAll() {
    return this.prisma.funcionario.findMany();
  }

  findOne(id: number) {
    return this.prisma.funcionario.findUnique({where: {id}});
  }

  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    await this.prisma.funcionario.update({ where: { id }, data: updateFuncionarioDto });
    return `Funcionário com ID ${id} atualizado com sucesso`;
  }

  async remove(id: number) {
    const funcionario = await this.prisma.funcionario.findUnique({
      where: { id },
      select: { nome: true }
    });

    await this.prisma.funcionario.delete({where: {id}});
    return `Funcionário(a) ${funcionario.nome} deletado do banco de dados`;
  }
}

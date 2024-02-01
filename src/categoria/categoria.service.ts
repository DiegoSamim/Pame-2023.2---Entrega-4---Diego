import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    await this.prisma.categoria.create({ data: createCategoriaDto });
    return 'Nova categoria adicionada com sucesso';
  }

  async findAll() {
    return this.prisma.categoria.findMany();
  }

  async findOne(id: number) {
    return this.prisma.categoria.findUnique({ where: { id } });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.prisma.categoria.update({ where: { id }, data: updateCategoriaDto });
    return `Categoria com ID ${id} atualizada com sucesso`;
  }

  async remove(id: number) {
    const categoria = await this.prisma.categoria.findUnique({
      where: { id },
      select: { tipo_categoria: true }
    });

    await this.prisma.categoria.delete({ where: { id } });
    return `Categoria ${categoria.tipo_categoria} removida do banco de dados`;
  }
}


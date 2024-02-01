import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaidaDeProdutoDto } from './dto/create-saida_de_produto.dto';
import { UpdateSaidaDeProdutoDto } from './dto/update-saida_de_produto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SaidaDeProdutoService {
  constructor(private readonly prisma: PrismaService) {} // Injeta o serviço Prisma para interagir com o banco de dados

  async create(createSaidaDeProdutoDto: CreateSaidaDeProdutoDto) {

    // Obtém a data atual no formato ISO-8601 ("YYYY-MM-DDTHH:MM:SSZ")
    const dataAtual = new Date().toISOString();

    // Define a data atual para o atributo data do DTO
    const saidaDeProdutoDtoComDataAtual = {
      ...createSaidaDeProdutoDto,
      data: dataAtual
    };

    // Cria uma nova saída de produto usando o Prisma
    await this.prisma.saida_de_Produto.create({ data: saidaDeProdutoDtoComDataAtual });

    // Atualiza o estoque subtraindo a quantidade fornecida
    await this.atualizarEstoque(createSaidaDeProdutoDto.id_produto, createSaidaDeProdutoDto.quantidade);

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

  async atualizarEstoque(id_produto: number, quantidade: number) {
    // Encontre o registro de estoque com base no id do produto
    const estoque = await this.prisma.estoque.findFirst({
      where: { id_produto: id_produto },
    });

    if (estoque) {
      // Atualize o estoque subtraindo a quantidade fornecida
      await this.prisma.estoque.update({
        where: { id: estoque.id }, // Use o id do estoque para identificar o registro
        data: { quantidade: { decrement: quantidade } }, // Decrementa a quantidade do estoque
      });
    }
  }
  
}

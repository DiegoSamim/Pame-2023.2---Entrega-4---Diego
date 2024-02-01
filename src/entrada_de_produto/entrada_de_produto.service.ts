import { Injectable } from '@nestjs/common';
import { CreateEntradaDeProdutoDto } from './dto/create-entrada_de_produto.dto';
import { UpdateEntradaDeProdutoDto } from './dto/update-entrada_de_produto.dto';
import { PrismaService } from '../prisma/prisma.service';
import { EncomendaDeIngredientesService } from 'src/encomenda_de_ingredientes/encomenda_de_ingredientes.service';

@Injectable()
export class EntradaDeProdutoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly encomendaDeIngredientesService: EncomendaDeIngredientesService,
  ) {}


  // Método para criar uma nova entrada de produto
  async create(createEntradaDeProdutoDto: CreateEntradaDeProdutoDto) {

    // Obtém a data atual no formato ISO-8601 ("YYYY-MM-DDTHH:MM:SSZ")
    const dataAtual = new Date().toISOString();

    // Define a data atual para o atributo data do DTO
    const entradaDeProdutoDtoComDataAtual = {
      ...createEntradaDeProdutoDto,
      data: dataAtual
    };

    // Cria uma nova entrada de produto usando o Prisma
    const entradaDeProduto = await this.prisma.entrada_de_Produto.create({ data: entradaDeProdutoDtoComDataAtual });

    const produto = await this.prisma.produto.findUnique({ where: { id: createEntradaDeProdutoDto.id_produto } });

    if (produto.id_categoria === 1){
      // Crie uma nova entrada em emconmenda de ingrediente com base nas informações da entrada de produto
        await this.encomendaDeIngredientesService.create({
        id_entrada: entradaDeProduto.id,
        id_funcionario: entradaDeProduto.id_funcionario,
        status: 'Pendente',
      });
    }

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


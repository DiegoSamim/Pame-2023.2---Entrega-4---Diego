import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntradaDeProdutoService } from './entrada_de_produto.service';
import { CreateEntradaDeProdutoDto } from './dto/create-entrada_de_produto.dto';
import { UpdateEntradaDeProdutoDto } from './dto/update-entrada_de_produto.dto';

@Controller('entrada-de-produto')
export class EntradaDeProdutoController {
  constructor(private readonly entradaDeProdutoService: EntradaDeProdutoService) {}

  // Rota para criar uma nova entrada de produto
  @Post()
  createEntradaDeProduto(@Body() createEntradaDeProdutoDto: CreateEntradaDeProdutoDto) {
    return this.entradaDeProdutoService.create(createEntradaDeProdutoDto);
  }

  // Rota para encontrar todas as entradas de produto
  @Get()
  findAllEntradasDeProduto() {
    return this.entradaDeProdutoService.findAll();
  }

  // Rota para encontrar uma entrada de produto por ID
  @Get(':id')
  findOneEntradaDeProduto(@Param('id') id: string) {
    return this.entradaDeProdutoService.findOne(+id);
  }

  // Rota para atualizar uma entrada de produto por ID
  @Patch(':id')
  updateEntradaDeProduto(@Param('id') id: string, @Body() updateEntradaDeProdutoDto: UpdateEntradaDeProdutoDto) {
    return this.entradaDeProdutoService.update(+id, updateEntradaDeProdutoDto);
  }

  // Rota para remover uma entrada de produto por ID
  @Delete(':id')
  removeEntradaDeProduto(@Param('id') id: string) {
    return this.entradaDeProdutoService.remove(+id);
  }

}

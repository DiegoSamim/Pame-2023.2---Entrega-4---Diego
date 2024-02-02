import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaidaDeProdutoService } from './saida_de_produto.service';
import { CreateSaidaDeProdutoDto } from './dto/create-saida_de_produto.dto';
import { UpdateSaidaDeProdutoDto } from './dto/update-saida_de_produto.dto';

@Controller('saida-de-produto')
export class SaidaDeProdutoController {
  constructor(private readonly saidaDeProdutoService: SaidaDeProdutoService) {}

  // Rota para criar uma nova saída de produto
  @Post()
  createSaidaDeProduto(@Body() createSaidaDeProdutoDto: CreateSaidaDeProdutoDto) {
    return this.saidaDeProdutoService.create(createSaidaDeProdutoDto);
  }

  // Rota para encontrar todas as saídas de produto
  @Get()
  findAllSaidaDeProduto() {
    return this.saidaDeProdutoService.findAll();
  }

  // Rota para encontrar uma saída de produto por ID
  @Get(':id')
  findOneSaidaDeProduto(@Param('id') id: string) {
    return this.saidaDeProdutoService.findOne(+id);
  }

  // Rota para atualizar uma saída de produto por ID
  @Patch(':id')
  updateSaidaDeProduto(@Param('id') id: string, @Body() updateSaidaDeProdutoDto: UpdateSaidaDeProdutoDto) {
    return this.saidaDeProdutoService.update(+id, updateSaidaDeProdutoDto);
  }

  // Rota para remover uma saída de produto por ID
  @Delete(':id')
  removeSaidaDeProduto(@Param('id') id: string) {
    return this.saidaDeProdutoService.remove(+id);
  }

}

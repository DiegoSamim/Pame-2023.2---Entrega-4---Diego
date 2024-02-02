import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  // Rota para criar um novo produto
  @Post()
  createProduto(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  // Rota para encontrar todos os produtos
  @Get()
  findAllProdutos() {
    return this.produtoService.findAll();
  }

  // Rota para encontrar um produto por ID
  @Get(':id')
  findOneProduto(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  // Rota para atualizar um produto por ID
  @Patch(':id')
  updateProduto(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  // Rota para remover um produto por ID
  @Delete(':id')
  removeProduto(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }

}

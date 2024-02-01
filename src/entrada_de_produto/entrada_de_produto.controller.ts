import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntradaDeProdutoService } from './entrada_de_produto.service';
import { CreateEntradaDeProdutoDto } from './dto/create-entrada_de_produto.dto';
import { UpdateEntradaDeProdutoDto } from './dto/update-entrada_de_produto.dto';

@Controller('entrada-de-produto')
export class EntradaDeProdutoController {
  constructor(private readonly entradaDeProdutoService: EntradaDeProdutoService) {}

  @Post()
  create(@Body() createEntradaDeProdutoDto: CreateEntradaDeProdutoDto) {
    return this.entradaDeProdutoService.create(createEntradaDeProdutoDto);
  }

  @Get()
  findAll() {
    return this.entradaDeProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entradaDeProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntradaDeProdutoDto: UpdateEntradaDeProdutoDto) {
    return this.entradaDeProdutoService.update(+id, updateEntradaDeProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entradaDeProdutoService.remove(+id);
  }
}

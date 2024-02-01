import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaidaDeProdutoService } from './saida_de_produto.service';
import { CreateSaidaDeProdutoDto } from './dto/create-saida_de_produto.dto';
import { UpdateSaidaDeProdutoDto } from './dto/update-saida_de_produto.dto';

@Controller('saida-de-produto')
export class SaidaDeProdutoController {
  constructor(private readonly saidaDeProdutoService: SaidaDeProdutoService) {}

  @Post()
  create(@Body() createSaidaDeProdutoDto: CreateSaidaDeProdutoDto) {
    return this.saidaDeProdutoService.create(createSaidaDeProdutoDto);
  }

  @Get()
  findAll() {
    return this.saidaDeProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saidaDeProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaidaDeProdutoDto: UpdateSaidaDeProdutoDto) {
    return this.saidaDeProdutoService.update(+id, updateSaidaDeProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saidaDeProdutoService.remove(+id);
  }
}

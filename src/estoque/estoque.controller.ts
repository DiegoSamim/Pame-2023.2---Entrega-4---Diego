import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  // Rota para criar um novo registro de estoque
  @Post()
  createEstoque(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  // Rota para encontrar todos os registros de estoque
  @Get()
  findAllEstoque() {
    return this.estoqueService.findAll();
  }

  // Rota para encontrar um registro de estoque por ID
  @Get(':id')
  findOneEstoque(@Param('id') id: string) {
    return this.estoqueService.findOne(+id);
  }

  // Rota para atualizar um registro de estoque por ID
  @Patch(':id')
  updateEstoque(@Param('id') id: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueService.update(+id, updateEstoqueDto);
  }

  // Rota para remover um registro de estoque por ID
  @Delete(':id')
  removeEstoque(@Param('id') id: string) {
    return this.estoqueService.remove(+id);
  }

}

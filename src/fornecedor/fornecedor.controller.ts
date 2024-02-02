import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';

@Controller('fornecedor')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  // Rota para criar um novo fornecedor
  @Post()
  createFornecedor(@Body() createFornecedorDto: CreateFornecedorDto) {
    return this.fornecedorService.create(createFornecedorDto);
  }

  // Rota para encontrar todos os fornecedores
  @Get()
  findAllFornecedores() {
    return this.fornecedorService.findAll();
  }

  // Rota para encontrar um fornecedor por ID
  @Get(':id')
  findOneFornecedor(@Param('id') id: string) {
    return this.fornecedorService.findOne(+id);
  }

  // Rota para atualizar um fornecedor por ID
  @Patch(':id')
  updateFornecedor(@Param('id') id: string, @Body() updateFornecedorDto: UpdateFornecedorDto) {
    return this.fornecedorService.update(+id, updateFornecedorDto);
  }

  // Rota para remover um fornecedor por ID
  @Delete(':id')
  removeFornecedor(@Param('id') id: string) {
    return this.fornecedorService.remove(+id);
  }

}

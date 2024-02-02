import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  // Rota para criar uma nova categoria
  @Post()
  createCategoria(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  // Rota para encontrar todas as categorias
  @Get()
  findAllCategorias() {
    return this.categoriaService.findAll();
  }

  // Rota para encontrar uma categoria por ID
  @Get(':id')
  findOneCategoria(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  // Rota para atualizar uma categoria por ID
  @Patch(':id')
  updateCategoria(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  // Rota para remover uma categoria por ID
  @Delete(':id')
  removeCategoria(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncomendaDeIngredientesService } from './encomenda_de_ingredientes.service';
import { CreateEncomendaDeIngredienteDto } from './dto/create-encomenda_de_ingrediente.dto';
import { UpdateEncomendaDeIngredienteDto } from './dto/update-encomenda_de_ingrediente.dto';

@Controller('encomenda-de-ingredientes')
export class EncomendaDeIngredientesController {
  constructor(private readonly encomendaDeIngredientesService: EncomendaDeIngredientesService) {}

  // Rota para criar uma nova encomenda de ingrediente
  @Post()
  createEncomendaDeIngrediente(@Body() createEncomendaDeIngredienteDto: CreateEncomendaDeIngredienteDto) {
    return this.encomendaDeIngredientesService.create(createEncomendaDeIngredienteDto);
  }

  // Rota para encontrar todas as encomendas de ingredientes
  @Get()
  findAllEncomendasDeIngrediente() {
    return this.encomendaDeIngredientesService.findAll();
  }

  // Rota para encontrar uma encomenda de ingrediente por ID
  @Get(':id')
  findOneEncomendaDeIngrediente(@Param('id') id: string) {
    return this.encomendaDeIngredientesService.findOne(+id);
  }

  // Rota para atualizar uma encomenda de ingrediente por ID
  @Patch(':id')
  updateEncomendaDeIngrediente(@Param('id') id: string, @Body() updateEncomendaDeIngredienteDto: UpdateEncomendaDeIngredienteDto) {
    return this.encomendaDeIngredientesService.update(+id, updateEncomendaDeIngredienteDto);
  }

  // Rota para remover uma encomenda de ingrediente por ID
  @Delete(':id')
  removeEncomendaDeIngrediente(@Param('id') id: string) {
    return this.encomendaDeIngredientesService.remove(+id);
  }

}

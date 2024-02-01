import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncomendaDeIngredientesService } from './encomenda_de_ingredientes.service';
import { CreateEncomendaDeIngredienteDto } from './dto/create-encomenda_de_ingrediente.dto';
import { UpdateEncomendaDeIngredienteDto } from './dto/update-encomenda_de_ingrediente.dto';

@Controller('encomenda-de-ingredientes')
export class EncomendaDeIngredientesController {
  constructor(private readonly encomendaDeIngredientesService: EncomendaDeIngredientesService) {}

  @Post()
  create(@Body() createEncomendaDeIngredienteDto: CreateEncomendaDeIngredienteDto) {
    return this.encomendaDeIngredientesService.create(createEncomendaDeIngredienteDto);
  }

  @Get()
  findAll() {
    return this.encomendaDeIngredientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encomendaDeIngredientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncomendaDeIngredienteDto: UpdateEncomendaDeIngredienteDto) {
    return this.encomendaDeIngredientesService.update(+id, updateEncomendaDeIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encomendaDeIngredientesService.remove(+id);
  }
}

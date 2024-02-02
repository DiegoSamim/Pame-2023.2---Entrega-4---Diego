import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  // Rota para criar um novo funcionário
  @Post()
  createFuncionario(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }

  // Rota para encontrar todos os funcionários
  @Get()
  findAllFuncionarios() {
    return this.funcionarioService.findAll();
  }

  // Rota para encontrar um funcionário por ID
  @Get(':id')
  findOneFuncionario(@Param('id') id: string) {
    return this.funcionarioService.findOne(+id);
  }

  // Rota para atualizar um funcionário por ID
  @Patch(':id')
  updateFuncionario(@Param('id') id: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionarioService.update(+id, updateFuncionarioDto);
  }

  // Rota para remover um funcionário por ID
  @Delete(':id')
  removeFuncionario(@Param('id') id: string) {
    return this.funcionarioService.remove(+id);
  }

}

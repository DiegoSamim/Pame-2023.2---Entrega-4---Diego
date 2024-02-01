import { PartialType } from '@nestjs/mapped-types';
import { CreateEncomendaDeIngredienteDto } from './create-encomenda_de_ingrediente.dto';

export class UpdateEncomendaDeIngredienteDto extends PartialType(CreateEncomendaDeIngredienteDto) {}

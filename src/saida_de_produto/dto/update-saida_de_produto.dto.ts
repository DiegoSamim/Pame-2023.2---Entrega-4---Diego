import { PartialType } from '@nestjs/mapped-types';
import { CreateSaidaDeProdutoDto } from './create-saida_de_produto.dto';

export class UpdateSaidaDeProdutoDto extends PartialType(CreateSaidaDeProdutoDto) {}

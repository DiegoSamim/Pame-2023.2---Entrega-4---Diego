import { PartialType } from '@nestjs/mapped-types';
import { CreateEntradaDeProdutoDto } from './create-entrada_de_produto.dto';

export class UpdateEntradaDeProdutoDto extends PartialType(CreateEntradaDeProdutoDto) {}

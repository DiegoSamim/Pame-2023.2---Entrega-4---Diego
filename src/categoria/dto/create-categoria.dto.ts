import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriaDto {
    @IsString({ message: 'O tipo de categoria deve ser uma string.' })
    @IsNotEmpty({ message: 'O tipo de categoria não pode estar vazio.' })
    tipo_categoria: string;
}

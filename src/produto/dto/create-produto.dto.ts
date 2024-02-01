import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
    @IsInt({ message: 'O ID da categoria deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID da categoria não pode estar vazio.' })
    id_categoria: number;

    @IsString({ message: 'O nome do produto deve ser uma string.' })
    @IsNotEmpty({ message: 'O nome do produto não pode estar vazio.' })
    nome_produto: string;

    @IsString({ message: 'A descrição do produto deve ser uma string.' })
    @IsNotEmpty({ message: 'A descrição do produto não pode estar vazia.' })
    descricao: string;

    @IsNumber({}, { message: 'O valor do produto deve ser um número.' })
    @IsNotEmpty({ message: 'O valor do produto não pode estar vazio.' })
    valor_produto: number;
}

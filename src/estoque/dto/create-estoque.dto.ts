import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateEstoqueDto {
    @IsInt({ message: 'O ID do produto deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID do produto não pode estar vazio.' })
    id_produto: number;

    @IsInt({ message: 'A quantidade deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'A quantidade não pode estar vazia.' })
    quantidade: number;
}

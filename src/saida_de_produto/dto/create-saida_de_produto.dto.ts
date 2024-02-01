import { IsInt, IsNotEmpty, IsDate, Min } from 'class-validator';

export class CreateSaidaDeProdutoDto {
    @IsInt({ message: 'O ID do funcionário deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID do funcionário não pode estar vazio.' })
    id_funcionario: number;

    @IsInt({ message: 'O ID do produto deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID do produto não pode estar vazio.' })
    id_produto: number;

    @IsDate({ message: 'A data deve ser um objeto Date válido.' })
    @IsNotEmpty({ message: 'A data não pode estar vazia.' })
    data: Date;

    @IsInt({ message: 'A quantidade deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'A quantidade não pode estar vazia.' })
    @Min(1, { message: 'A quantidade mínima é 1.' })
    quantidade: number;
}

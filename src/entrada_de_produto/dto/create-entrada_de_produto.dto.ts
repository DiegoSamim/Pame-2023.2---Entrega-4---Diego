import { IsInt, IsNotEmpty, IsNumber, IsDate, Min } from 'class-validator';

export class CreateEntradaDeProdutoDto {
    @IsInt({ message: 'O ID do produto deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID do produto não pode estar vazio.' })
    id_produto: number;

    @IsInt({ message: 'O ID do fornecedor deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID do fornecedor não pode estar vazio.' })
    id_fornecedor: number;

    @IsInt({ message: 'O ID do funcionário deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID do funcionário não pode estar vazio.' })
    id_funcionario: number;

    // @IsDate({ message: 'A data da entrada deve ser uma data válida.' }) Não funcional ainda 
    //@IsNotEmpty({ message: 'A data da entrada não pode estar vazia.' })
    data: Date;

    @IsNumber({ allowNaN: false }, { message: 'O valor total da entrada deve ser um número.' })
    @IsNotEmpty({ message: 'O valor total da entrada não pode estar vazio.' })
    valor_total_entrada: number;

    @IsInt({ message: 'A quantidade deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'A quantidade não pode estar vazia.' })
    @Min(1, { message: 'A quantidade mínima é 1.' })
    quantidade: number;
}

import { IsInt, IsNotEmpty, IsDateString, IsString } from 'class-validator';

export class CreateEncomendaDeIngredienteDto {
    @IsInt({ message: 'O ID da entrada deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID da entrada não pode estar vazio.' })
    id_entrada: number;

    @IsInt({ message: 'O ID do funcionário deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID do funcionário não pode estar vazio.' })
    id_funcionario: number;

    @IsString({ message: 'O status deve ser uma string.' })
    @IsNotEmpty({ message: 'O status não pode estar vazio.' })
    status: string;

    //@IsDateString()
    @IsNotEmpty({ message: 'A data de validade não pode estar vazia.' })
    data_de_validade: Date;
}


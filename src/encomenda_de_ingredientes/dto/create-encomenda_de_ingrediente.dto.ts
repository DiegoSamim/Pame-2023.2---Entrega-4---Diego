import { IsInt, IsNotEmpty, IsDateString, IsString, IsOptional } from 'class-validator';

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

    @IsDateString()
    @IsOptional()
    data_de_validade?: Date;
}


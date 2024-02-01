import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateFornecedorDto {
    @IsNotEmpty({ message: 'O nome do fornecedor não pode estar vazio.' })
    nome_fornecedor: string;

    @IsNotEmpty({ message: 'O endereço não pode estar vazio.' })
    endereco: string;

    telefone: string;

    @IsEmail({}, { message: 'O e-mail fornecido é inválido.' })
    email: string;
}

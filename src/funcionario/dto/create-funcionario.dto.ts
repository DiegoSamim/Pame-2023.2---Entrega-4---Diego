import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateFuncionarioDto {
    @IsNotEmpty({ message: 'O Nome não pode estar vazio.' })
    nome: string;
    
    telefone: string;
    @IsEmail({}, { message: 'O e-mail fornecido é inválido.' })
    email: string;
    @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
    senha: string;
    @IsNotEmpty({ message: 'O cargo não pode estar vazio.' })
    cargo: string;
}


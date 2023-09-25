import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário cadastrado',
    example: 'João da Silva',
  })
  name: string;

  @ApiProperty({
    description: 'E-mail do usuário cadastrado',
    example: 'email@exemplo.com',
  })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário cadastrado',
    example: 'senha1234',
  })
  password: string;
}

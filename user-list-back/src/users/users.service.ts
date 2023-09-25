import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    if (!name || !email || !password) {
      throw new HttpException(
        'Todos os campos devem ser preenchidos',
        HttpStatus.BAD_REQUEST,
      );
    }

    const emailExists = await this.userRepository.findOne({
      where: { email },
    });

    if (emailExists) {
      throw new HttpException(
        'O email já está cadastrado no banco de dados',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    this.generateJwtToken(email);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    const userNoPass = await this.userRepository.save(user);

    delete userNoPass.password;

    return userNoPass;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      select: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
      order: {
        id: 'ASC',
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    user.name = updateUserDto.name || user.name;
    user.email = updateUserDto.email || user.email;
    user.updatedAt = new Date();

    if (updateUserDto.password) {
      user.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.userRepository.remove(user);

    return {
      message: 'Usuário removido com sucesso',
    };
  }

  generateJwtToken(email: string): string {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return token;
  }
}

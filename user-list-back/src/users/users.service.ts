import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      select: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  generateJwtToken(email: string): string {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return token;
  }
}

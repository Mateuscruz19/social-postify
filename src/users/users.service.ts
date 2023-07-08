// The UsersService class contains a list of users and a method to add a new user to the list. The postNewUser method is called by the controller when a new user is created.

import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async addUser(data: CreateUserDto) {
    const hashPassword = bcrypt.hashSync(data.password, 10);
    const user = await this.usersRepository.findUserByEmail(data.email);
    if (user)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    await this.usersRepository.addUser({ ...data, password: hashPassword });
  }
  async findAllUsers() {
    return await this.usersRepository.findAllUsers();
  }
}

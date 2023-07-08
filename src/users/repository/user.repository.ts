import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '@prisma/client';

export abstract class UsersRepository {
  abstract addUser(data: CreateUserDto): Promise<void>;
  abstract findUserByEmail(email: string): Promise<User>;
  abstract findAllUsers(): Promise<User[]>;
}


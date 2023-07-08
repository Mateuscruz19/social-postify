// The UsersService class contains a list of users and a method to add a new user to the list. The postNewUser method is called by the controller when a new user is created.

import { Injectable } from '@nestjs/common';
import { User } from './entity/User';
import { ConflictException } from '@nestjs/common/exceptions';

@Injectable()
export class UsersService {
  users: User[] = [];

  postNewUser({ name, email, password, avatar }: User) {
    // Check if a user with this email already exists in the list of users. If so, throw an exception.
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    // If a user with this email does not exist, create a new user and add them to the list.
    const user = new User(name, email, password, avatar);
    return this.users.push(user);
  }
}

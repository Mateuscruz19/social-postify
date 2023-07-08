// This code creates a new user in the database.

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // POST /user
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addUser(@Body() body: CreateUserDto) {
    // Call the service function to create a new user
    return this.userService.addUser(body);
  }
  @Get()
  findAllUsers() {
    return this.userService.findAllUsers();
  }
}

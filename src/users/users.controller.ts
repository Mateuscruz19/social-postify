// This code creates a new user in the database.

import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // POST /user
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async postNewUser(@Body() body: any) {
    // Check if the name is provided
    if (!body.name) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Name is required',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    // Call the service function to create a new user
    return this.userService.postNewUser(body);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  postNewUser(@Body() body: any) {
    return this.userService.postNewUser(body);
  }
}

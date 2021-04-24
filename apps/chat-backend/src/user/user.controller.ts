import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    const { googleId, email } = createUserDto;
    const user = await this.userService.findOne(googleId, email);
    if (user) {
      return user;
    } else {
      return this.userService.create(createUserDto);
    }
  }

  @Get('/all')
  getAvailableUsers() {
    try {
      return this.userService.getUsers();
    } catch (err) {
      console.log(err);
    }
  }
}

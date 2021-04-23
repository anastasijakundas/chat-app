import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);

    return createdUser.save();
  }

  async getUsers() {
    return this.userModel.find().exec();
  }

  async findOne(googleId: string, email: string): Promise<User> {
    // return awaitthis.userModel.findOne({ email }).exec();

    const user = await this.userModel.findOne({ googleId, email }).exec();

    return user;
  }
}

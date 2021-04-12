import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../user/schemas/user.schema';

import { CreateChatDto } from './dto/create-chat.dto';
import { Chat, ChatDocument, MessageDocument } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('Chat') private readonly chatModel: Model<ChatDocument>,
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
    @InjectModel('Message')
    private readonly messageModel: Model<MessageDocument>
  ) {}

  async create(createChatDto: CreateChatDto) {
    const chatData = {
      title: 'New 123',
      participants: createChatDto.participants,
      messages: [createChatDto.message],
    };
    const createdChat = new this.chatModel(chatData);

    createdChat?.participants?.map((user) => {
      this.userModel.findByIdAndUpdate(
        user,
        {
          $push: { chats: createdChat._id },
        },
        (err, result) => {
          if (err) {
            console.log(err, 'err');
          } else {
            console.log(result, 'result');
          }
        }
      );
    });
  }

  async getChats(userId: string) {
    return this.userModel
      .findById(userId)
      .populate({ path: 'chats', populate: { path: 'messages.sender' } })
      .exec();
  }

  async pushMessage(data) {
    const message = new this.messageModel({
      sender: data.sender,
      text: data.text,
    });

    this.chatModel.findByIdAndUpdate(
      data.chatId,
      {
        $push: {
          messages: message,
        },
      },
      (err, result) => {
        if (err) {
          console.log(err, 'err');
        } else {
          console.log(result, 'result');
        }
      }
    );
  }
  // async getChatDetails
}

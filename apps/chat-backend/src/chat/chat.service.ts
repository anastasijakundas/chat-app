import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from '../user/schemas/user.schema';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat, ChatDocument } from './schemas/chat.schema';
import { Message, MessageDocument } from './schemas/message.schema';
import { SendMessageDto } from '../chat-room/dto/send-message.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>
  ) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const chatData = {
      ...createChatDto,
      messages: [createChatDto.message],
    };
    const createdChat = new this.chatModel(chatData);

    createdChat?.participants?.map((user) => {
      this.userModel.findByIdAndUpdate(
        user,
        {
          $push: { chats: createdChat._id },
        },
        (err) => {
          if (err) {
            console.log(err, 'err');
          }
        }
      );
    });

    return createdChat.save();
  }

  async getChats(userId: string): Promise<User> {
    return await this.userModel.findById(userId).populate('chats').exec();
  }

  async pushMessage(data: SendMessageDto): Promise<Chat> {
    const message = new this.messageModel({
      sender: data.sender,
      text: data.text,
    });

    const chat = await this.chatModel
      .findByIdAndUpdate(
        data.id,
        {
          $push: {
            messages: message,
          },
        },
        { new: true }
      )
      .populate({ path: 'messages', populate: { path: 'sender' } })
      .exec();
    
    return chat;
  }

  async getChat(chatId: string): Promise<Chat> {
    return await this.chatModel
      .findById(chatId)
      .populate({ path: 'messages', populate: { path: 'sender' } })
      .exec();
  }
}

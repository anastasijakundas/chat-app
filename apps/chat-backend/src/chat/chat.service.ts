import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../user/schemas/user.schema';

import { CreateChatDto } from './dto/create-chat.dto';
import { Chat, ChatDocument, MessageDocument } from './schemas/chat.schema';
import { SendMessageDto } from '../chat-room/dto/send-message.dto';

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

  async getChats(userId: string) {
    return await this.userModel.findById(userId).populate('chats').exec();
  }

  async pushMessage(data: SendMessageDto) {
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
    // TODO send only message now a whole chat
  }

  async getChat(chatId: string) {
    return this.chatModel
      .findById(chatId)
      .populate({ path: 'messages', populate: { path: 'sender' } })
      .exec();
  }
}

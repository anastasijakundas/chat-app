import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserDocument } from '../user/schemas/user.schema';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { ChatRoomDocument } from './schemas/chat-room.schema';
import { SendMessageDto } from './dto/send-message.dto';
import { MessageDocument } from '../chat/schemas/message.schema';

@Injectable()
export class ChatRoomService {
  constructor(
    @InjectModel('ChatRoom')
    private readonly chatRoomModel: Model<ChatRoomDocument>,
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
    @InjectModel('Message')
    private readonly messageModel: Model<MessageDocument>
  ) {}
  createChatRoom(createChatRoomDto: CreateChatRoomDto) {
    const createdChatRoom = new this.chatRoomModel(createChatRoomDto);
    return createdChatRoom.save();
  }

  async getChatRooms() {
    return this.chatRoomModel.find().exec();
  }

  async getChatRoom(chatRoomId: string) {
    return this.chatRoomModel
      .findById(chatRoomId)
      .populate({ path: 'messages', populate: { path: 'sender' } })
      .exec();
  }

  async sendMessage(data: SendMessageDto) {
    const message = new this.messageModel({
      sender: data.sender,
      text: data.text,
    });
    return await this.chatRoomModel
      .findByIdAndUpdate(data.id, {
        $push: { messages: message },
      }, { new: true })
      .populate({ path: 'messages', populate: { path: 'sender' } })
      .exec();
  }
}

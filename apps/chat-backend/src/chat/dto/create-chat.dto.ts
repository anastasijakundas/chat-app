import { IsString } from 'class-validator';
import { Type } from 'class-transformer';

class MessageDto {
    @IsString()
    sender: string;

    @IsString()
    text: string;
}

export class CreateChatDto {
    @IsString()
    creator: string;

    @IsString({ each: true })
    participants: string[];

    @Type(() => MessageDto)
    message: MessageDto;

    @IsString()
    title: string;
}

import { IsString } from 'class-validator';

export class CreateChatRoomDto {
    @IsString()
    creator: string;

    @IsString()
    title: string;

    @IsString()
    description: string;
}

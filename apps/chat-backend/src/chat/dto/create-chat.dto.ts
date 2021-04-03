import { IsString } from 'class-validator';

export class CreateChatDto {
    @IsString()
    creator: string;

    // TODO add validation and change Type
    participants: {id: string}[]

    // TODO add validation and change Type
    messages: { sender: string; time: string; text: string }[]
}

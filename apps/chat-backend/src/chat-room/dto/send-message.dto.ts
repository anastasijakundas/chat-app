import { IsString } from 'class-validator';

export class SendMessageDto {
    @IsString()
    sender: string;

    @IsString()
    text: string;

    @IsString()
    id: string;
}

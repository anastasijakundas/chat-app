import { Message } from '@chat-application/types';
// TODO move to common libs
export interface IMessage {
    sender: {
        name: string;
    };
    text: string;
    _id: string;
}

export interface ChatData {
    creator?: string;
    description?: string;
    messages: Message[];
    title: string;
    _id: string;
}
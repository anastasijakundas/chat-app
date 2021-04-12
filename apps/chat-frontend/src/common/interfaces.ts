// TODO move to common libs
export interface IMessage {
    sender: {
        name: string;
    };
    text: string;
    id: string;
}
import { User } from "./User";
import { MessageStatus } from "./MessageStatus";


export class Message {
  public id: number;
  public text: string;
  public sender: User;
  public edited?: boolean;
  public citation?: number;
  public date: Date;
  public reactions?: Record<string, User[]>;
  public fromMe?: boolean;
  public status?: MessageStatus;
}

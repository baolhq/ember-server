import { Injectable } from '@nestjs/common';
import { IListener } from '../common/interfaces';

@Injectable()
export class MessageService implements IListener {
  getChannelName() {
    return 'message_channel';
  }

  handleNotification(payload: string) {
    console.log('Handling message channel notification:', payload);
    const [action, id] = payload.split(':');
    console.log(`Action: ${action}, ID: ${id}`);
  }
}

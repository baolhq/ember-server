import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MessageService } from './message.service';
import { Client, Notification } from 'pg';
import { IListener } from '../common/interfaces';

@Injectable()
export class ListenerService implements OnModuleInit, OnModuleDestroy {
  private client: Client; // For listening to raw PostgreSQL notifications
  private readonly listeners: IListener[];

  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    messageChannelListener: MessageService,
  ) {
    this.listeners = [messageChannelListener];
  }

  async onModuleInit() {
    // Retrieve the native PostgreSQL client from TypeORM DataSource
    this.client = await this.dataSource.driver
      .createQueryRunner('master')
      .connect();

    // Set up the notification handler
    this.client.on('notification', (notification) => {
      this.handleNotification(notification);
    });

    // Dynamically register LISTEN commands for all listeners
    for (const listener of this.listeners) {
      const channel = listener.getChannelName();
      await this.client.query(`LISTEN ${channel}`);
      console.log(
        `Listening to PostgreSQL notifications on channel: ${channel}`,
      );
    }
  }

  // Handle the notifications
  handleNotification(notification: Notification) {
    const listener = this.listeners.find(
      (listener) => listener.getChannelName() === notification.channel,
    );

    if (listener) {
      listener.handleNotification(notification.payload);
    } else {
      console.log(`Unknown channel: ${notification.channel}`);
    }
  }

  // Close the connection when the module is destroyed
  async onModuleDestroy() {
    if (this.client) {
      // Unregister all channels dynamically
      for (const listener of this.listeners) {
        const channel = listener.getChannelName();
        await this.client.query(`UNLISTEN ${channel}`);
        console.log(`Stop listening from channel: ${channel}`);
      }
      await this.client.end();
      console.log('Listener service disconnected.');
    }
  }
}

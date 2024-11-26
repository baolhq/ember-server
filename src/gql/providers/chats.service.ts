import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChatInput, UpdateChatInput } from '../dto';
import { PrismaService } from '../../providers/prisma';

@Injectable()
export class ChatsService {
  constructor(private readonly prisma: PrismaService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createChatInput: CreateChatInput) {
    return 'This action adds a new chat';
  }

  findAll() {
    return this.prisma.chat.findMany();
  }

  async findOne(id: string) {
    const chat = await this.prisma.chat.findUnique({
      where: { id: id },
    });
    if (!chat) {
      throw new NotFoundException(`Chat with id ${id} not found`);
    }
    return chat;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: string, updateChatInput: UpdateChatInput) {
    return `This action updates a #${id} chat`;
  }

  remove(id: string) {
    return `This action removes a #${id} chat`;
  }
}

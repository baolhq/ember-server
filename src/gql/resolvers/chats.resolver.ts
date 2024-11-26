import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChatsService } from '../providers';
import { CreateChatInput, UpdateChatInput } from '../dto';
import { Chat } from '../entities';

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}

  @Mutation(() => Chat)
  create(@Args('createChatInput') createChatInput: CreateChatInput) {
    return this.chatsService.create(createChatInput);
  }

  @Query(() => [Chat], { name: 'chats' })
  findAll() {
    return this.chatsService.findAll();
  }

  @Query(() => Chat, { name: 'chat' })
  findOne(@Args('id') id: string) {
    return this.chatsService.findOne(id);
  }

  @Mutation(() => Chat)
  update(@Args('updateChatInput') updateChatInput: UpdateChatInput) {
    return this.chatsService.update(updateChatInput.id, updateChatInput);
  }

  @Mutation(() => Chat)
  remove(@Args('id') id: string) {
    return this.chatsService.remove(id);
  }
}

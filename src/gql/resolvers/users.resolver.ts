import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../providers';
import { CreateUserInput, UpdateUserInput } from '../dto';
import { User } from '../entities';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => User)
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  // Query for all users
  @Query(() => [User], { name: 'users' }) // Return an array of User objects
  findAll() {
    return this.userService.findAll();
  }

  // Query for a single users by ID
  @Query(() => User, { name: 'user' }) // Return a single User object
  findOne(@Args('id') id: string) {
    // Define the 'id' argument as a string
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  remove(@Args('id') id: string) {
    return this.userService.remove(id);
  }
}

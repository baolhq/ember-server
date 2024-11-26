import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateChatInput {
  @Field()
  type: string;

  @Field()
  name: string;
}

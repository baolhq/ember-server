import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateChatInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  avatar_url?: string;

  @Field({ nullable: true })
  background_url?: string;

  @Field({ nullable: true })
  invitation_type?: string;

  @Field({ nullable: true })
  description?: string;
}

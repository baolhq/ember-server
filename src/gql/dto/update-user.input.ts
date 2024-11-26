import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  display_name?: string;

  @Field({ nullable: true })
  tag?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  avatar_url?: string;

  @Field({ nullable: true })
  gender?: string;
}

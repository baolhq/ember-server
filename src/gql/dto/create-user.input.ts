import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  display_name: string;

  @Field()
  tag: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  gender: string;
}

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Chat {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  avatar_url?: string;

  @Field({ nullable: true })
  background_url?: string;

  @Field()
  invitation_type: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}

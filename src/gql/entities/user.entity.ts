import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  display_name: string;

  @Field()
  tag: string;

  @Field()
  email: string;

  @Field()
  password_hash: string;

  @Field({ nullable: true })
  avatar_url?: string;

  @Field()
  gender: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field()
  last_active: Date;

  @Field()
  status: string;

  @Field({ nullable: true })
  deleted_at?: Date;
}

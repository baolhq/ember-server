import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { DateScalar } from './scalars';
import { GraphQLModule } from '@nestjs/graphql';
import { ChatsResolver, UsersResolver } from './resolvers';
import { ChatsService, UsersService } from './providers';
import { PrismaService } from '../providers/prisma';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/gql/schema.graphql', // Auto-generate the schema file
      playground: true, // Optional: GraphQL Playground for testing in the browser
      introspection: true, // Enable introspection for GraphQL tools
      debug: true,
    }),
  ],
  providers: [
    UsersResolver,
    UsersService,
    ChatsResolver,
    ChatsService,
    DateScalar,
    PrismaService,
  ],
})
export class GqlModule {}

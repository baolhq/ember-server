import { Module } from '@nestjs/common';
import { MongoDBProviderModule } from './providers/databases';
import { GqlModule } from './gql';
import { AuthModule } from './auth';

@Module({
  imports: [MongoDBProviderModule, GqlModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

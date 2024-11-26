import { Module } from '@nestjs/common';
import { PostgresProviderModule } from './providers/databases';
import { GqlModule } from './gql';

@Module({
  imports: [PostgresProviderModule, GqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

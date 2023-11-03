import { Module } from '@nestjs/common';
import { MockService } from './mock.service';
import { MockResolver } from './mock.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
  ],
  providers: [MockResolver, MockService],
})
export class MockModule {}

import { Resolver, Query, Args } from '@nestjs/graphql';
import { MockService } from './mock.service';
import { Mock } from './entities/mock.entity';
import { QueryMock } from './dto/query-mock.input';

@Resolver(() => Mock)
export class MockResolver {
  constructor(private readonly mockService: MockService) {}

  @Query(() => [Mock], { name: 'mock' })
  findAll(@Args() args: QueryMock) {
    return { exampleField: 1 };
  }
}

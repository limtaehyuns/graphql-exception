import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MockService } from './mock.service';
import { Mock } from './entities/mock.entity';
import { CreateMockInput } from './dto/create-mock.input';
import { UpdateMockInput } from './dto/update-mock.input';

@Resolver(() => Mock)
export class MockResolver {
  constructor(private readonly mockService: MockService) {}

  @Mutation(() => Mock)
  createMock(@Args('createMockInput') createMockInput: CreateMockInput) {
    return this.mockService.create(createMockInput);
  }

  @Query(() => [Mock], { name: 'mock' })
  findAll() {
    return this.mockService.findAll();
  }

  @Query(() => Mock, { name: 'mock' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mockService.findOne(id);
  }

  @Mutation(() => Mock)
  updateMock(@Args('updateMockInput') updateMockInput: UpdateMockInput) {
    return this.mockService.update(updateMockInput.id, updateMockInput);
  }

  @Mutation(() => Mock)
  removeMock(@Args('id', { type: () => Int }) id: number) {
    return this.mockService.remove(id);
  }
}

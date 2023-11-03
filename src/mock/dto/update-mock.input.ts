import { CreateMockInput } from './create-mock.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMockInput extends PartialType(CreateMockInput) {
  @Field(() => Int)
  id: number;
}

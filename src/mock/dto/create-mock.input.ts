import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMockInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

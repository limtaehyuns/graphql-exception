import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Mock {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

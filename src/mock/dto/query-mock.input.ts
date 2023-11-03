import { Int, Field, ArgsType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { IfError } from 'src/decorators/IfError';

@ArgsType()
export class QueryMock {
  @IsString()
  @IsNotEmpty()
  @IfError('isNotEmpty', 'ID_CAN_NOT_BE_EMPTY')
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
}

import { SetMetadata, applyDecorators } from '@nestjs/common';

export const IfError = (decorator: string, error: string) =>
  applyDecorators(SetMetadata(`${decorator}:exception`, error));

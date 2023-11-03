import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, ValidationPipe } from '@nestjs/common';
import { validate } from 'class-validator';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true,
      forbidUnknownValues: true,
      validatorPackage: {
        async validate(object, validatorOptions) {
          if (typeof object === 'object') {
            const validater = await validate(object, validatorOptions);

            const errors = validater // Getting all the errors from the validation and flattening them
              .map((error) => {
                return Object.keys(error.constraints);
              })
              .flat();

            errors.forEach((key) => {
              // Checking if any of the errors have a corresponding exception
              const errorType = Reflect.getMetadata(`${key}:exception`, object);
              if (errorType) {
                throw new HttpException(errorType, 400);
              }
            });
            return validater;
          }

          // if the object is not an object, throw an error
          throw new HttpException('Invalid object', 400);
        },
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();

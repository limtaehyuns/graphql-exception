import { Injectable } from '@nestjs/common';
import { CreateMockInput } from './dto/create-mock.input';
import { UpdateMockInput } from './dto/update-mock.input';

@Injectable()
export class MockService {
  create(createMockInput: CreateMockInput) {
    return 'This action adds a new mock';
  }

  findAll() {
    return `This action returns all mock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mock`;
  }

  update(id: number, updateMockInput: UpdateMockInput) {
    return `This action updates a #${id} mock`;
  }

  remove(id: number) {
    return `This action removes a #${id} mock`;
  }
}

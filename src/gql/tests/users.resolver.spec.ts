import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from '../resolvers';
import { UsersService } from '../providers';
import { PrismaService } from '../../providers/prisma';

describe('UserResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService, PrismaService],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

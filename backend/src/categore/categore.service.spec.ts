import { Test, TestingModule } from '@nestjs/testing';
import { CategoreService } from './categore.service';

describe('CategoreService', () => {
  let service: CategoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoreService],
    }).compile();

    service = module.get<CategoreService>(CategoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

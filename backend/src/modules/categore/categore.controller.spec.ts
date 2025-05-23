import { Test, TestingModule } from '@nestjs/testing';
import { CategoreController } from './categore.controller';
import { CategoreService } from './categore.service';

describe('CategoreController', () => {
  let controller: CategoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoreController],
      providers: [CategoreService],
    }).compile();

    controller = module.get<CategoreController>(CategoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

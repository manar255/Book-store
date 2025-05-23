import { Module } from '@nestjs/common';
import { CategoreService } from './categore.service';
import { CategoreController } from './categore.controller';

@Module({
  controllers: [CategoreController],
  providers: [CategoreService],
})
export class CategoreModule {}

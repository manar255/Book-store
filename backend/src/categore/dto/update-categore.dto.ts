import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoreDto } from './create-categore.dto';

export class UpdateCategoreDto extends PartialType(CreateCategoreDto) {}

import { Module } from '@nestjs/common';
import { ParserController } from './parser.controller';
import { ParserService } from './parser.service';

@Module({
  imports: [],
  controllers: [ParserController],
  providers: [ParserService],
})
export class ParserModule {}

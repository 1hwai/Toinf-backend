import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Latex } from '../utils/Latex.dto';
import { ParserService } from './parser.service';
import { Logger } from '@nestjs/common';

@Controller('parse')
export class ParserController {
  private readonly logger = new Logger(ParserService.name);

  constructor(
    private readonly parserService: ParserService,
  ) {}

  @Post()
  async parse(@Body() data: Latex) {
    this.logger.log('request: /parse, POST');
    this.logger.debug('data: ' + data.content);
    const result = await this.parserService.parse(data);
    this.logger.debug('result: ' + result);
    return {'result' : result};
  }

}

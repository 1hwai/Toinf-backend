import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Latex } from './Latex.dto';
import { ParserService } from './parser.service';
import { Logger } from '@nestjs/common';

@Controller('parse')
export class ParserController {
  private readonly logger = new Logger(ParserService.name)
  constructor(
    private readonly parserService: ParserService,
  ) {}

  @Post()
  async parse(@Body() data: Latex) {
    this.logger.debug('request: /parse, POST')
    return {'result' : await this.parserService.parse(data)};
  }

  @Get()
  async parseTest() {
    this.logger.debug('request: /parse2, GET')
    const data:Latex = { content: 'e^{x} + \sin{\left(\pi x right)}'}
    return {'result' : await this.parserService.parse(data)};
  }

}

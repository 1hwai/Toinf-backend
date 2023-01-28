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
  parse(@Body() data: Latex) {
    this.logger.debug("request: /parse, POST")
    return {"result" : this.parserService.parse(data)};
  }
  
  // @Get(':data')
  // parse(@Param('data') data: string) {
  //   const latex:Latex = { content: data }
  //   const result:string = this.parserService.parse(latex);
  //   return { stausCode: 200, "result": result};
  // }
  

}

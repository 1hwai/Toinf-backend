import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParserModule } from './parser/parser.module';

@Module({
  imports: [ParserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

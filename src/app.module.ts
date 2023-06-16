import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParserModule } from './parser/parser.module';
import {DerivativeModule} from "./derivative/derivative.module";

@Module({
  imports: [
    ParserModule,
    DerivativeModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}

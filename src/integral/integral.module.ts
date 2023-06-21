import { Module } from '@nestjs/common';
import { IntegralController } from './integral.controller';
import { IntegralService } from './integral.service';

@Module({
  controllers: [IntegralController],
  providers: [IntegralService]
})
export class IntegralModule {}

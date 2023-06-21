import {Body, Controller, Logger, Post} from '@nestjs/common';
import {IntegralService} from "./integral.service";
import {CalculusDto} from "../utils/calculus.dto";

@Controller('integral')
export class IntegralController {
    private readonly logger = new Logger(IntegralController.name);

    constructor(
        private readonly integralService: IntegralService,
    ) {}

    @Post()
    async integral(@Body() data: CalculusDto) {
        this.logger.log('request: /integral, POST:: data: ' + data.latex);
        const result = await this.integralService.integral(data);
        return { 'result': result };
    }

}

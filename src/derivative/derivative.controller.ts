import {Body, Controller, Logger, Post} from "@nestjs/common";
import {DerivativeService} from "./derivative.service";
import {CalculusDto} from "../utils/calculus.dto";

@Controller('derivative')
export class DerivativeController {
    private readonly logger = new Logger(DerivativeService.name);

    constructor(
        private readonly derivativeService: DerivativeService,
    ) {}

    @Post()
    async derivative(@Body() data: CalculusDto) {
        this.logger.log('request: /derivative, POST :: data: ' + data.latex);
        const result = await this.derivativeService.derivative(data);
        return { 'result': result };
    }

}

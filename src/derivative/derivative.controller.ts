import {Body, Controller, Logger, Post} from "@nestjs/common";
import {ParserService} from "../parser/parser.service";
import {Latex} from "../utils/Latex.dto";
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
        this.logger.log('request: /derivative, POST');
        this.logger.debug('data: ' + data.latex);
        const result = await this.derivativeService.derivative(data);
        this.logger.debug('result: ' + result.latex);
        return {'result' : result};
    }

}

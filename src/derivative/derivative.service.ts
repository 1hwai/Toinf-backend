import {Injectable, Logger} from "@nestjs/common";
import {Latex} from "../utils/Latex.dto";
import {spawn} from "child_process";
import {CalculusDto} from "../utils/calculus.dto";
import parse from "../utils/parse"

@Injectable()
export class DerivativeService {
    private readonly logger = new Logger(DerivativeService.name);

    public async derivative(data: CalculusDto): Promise<CalculusDto> {
        const ddx: CalculusDto = data;
        const parsed = await parse({'content': ddx.latex});
        this.logger.debug('D: parsed ' + parsed);
        console.log()
        const result = await this.execute({'content': parsed});
        ddx.latex = result;
        return ddx;
    }

    private execute(data: Latex): Promise<any> {
        const p = spawn('python', ['src/derivative/derivative.py', JSON.stringify(data.content)])
        return new Promise((resolve) => {
            p.stdout.on('data', res => {
                resolve(res.toString());
                if (res.toString() === '') {
                    this.logger.warn('Error while processing a Derivative');
                }
            });
            p.stderr.on('data', x=> {
                this.logger.warn('Error : Derivative', x);
            })
        });
    }
}
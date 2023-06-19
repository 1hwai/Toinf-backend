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
        ddx.latex = await this.execute({'content': data.latex});
        return ddx;
    }

    private execute(data: Latex): Promise<any> {
        console.log('0619 check: ' + data.content);
        const p = spawn('python', ['src/derivative/derivative.py', data.content])
        return new Promise((resolve) => {
            p.stdout.on('data', res => {
                resolve(res.toString());
                if (res.toString() === '') {
                    this.logger.warn('Error while processing a Derivative');
                }
            });
            p.stderr.on('data', x => {
                this.logger.warn('Error : Derivative', x);
            })
        });
    }
}
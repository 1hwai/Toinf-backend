import {Injectable, Logger} from '@nestjs/common';
import {CalculusDto} from "../utils/calculus.dto";
import {spawn} from "child_process";

@Injectable()
export class IntegralService {
    private readonly logger = new Logger(IntegralService.name);

    public async integral(data: CalculusDto): Promise<CalculusDto> {
        data.latex = await this.execute(data.latex);
        return data;
    }

    private execute(latex: string): Promise<string> {
        const p = spawn('python', ['src/integral/integral.py', latex])
        return new Promise((resolve) => {
            p.stdout.on('data', res => {
                resolve(res.toString());
                if (res.toString() === '') {
                    this.logger.warn('Error while processing an Integral');
                }
            });
            p.stderr.on('data', x => {
                this.logger.warn('Error : Integral', x);
            })
        });
    }
}

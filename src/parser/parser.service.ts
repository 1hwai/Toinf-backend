import { Injectable, Logger } from '@nestjs/common';
import { Latex } from './Latex.dto';
import { spawn } from 'child_process';

@Injectable()
export class ParserService {
    private readonly logger = new Logger(ParserService.name);

    async parse(data: Latex): Promise<string> {
        const result = await this.execute(data);
        return result.toString();
    }

    execute(data: Latex): Promise<any> {
        const p = spawn('python', ['src/parser/parser.py', JSON.stringify(data.content)])
        return new Promise((resolve) => {
            p.stdout.on("data", res => {
                resolve(res.toString())
                if (res === null || res.toString() === '') {
                    this.logger.warn('Error: parser result is null');
                }
            });
            p.stderr.on("data", x => {
                this.logger.warn('Error: Failed to parse.' + x.toString());
            });
        });
    }

}
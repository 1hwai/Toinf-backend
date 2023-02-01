import { Injectable, Logger } from '@nestjs/common';
import { Latex } from './Latex.dto';
import { spawn } from 'child_process';

@Injectable()
export class ParserService {
    private readonly logger = new Logger(ParserService.name);

    async parse(data: Latex): Promise<string> {
        const result = await this.execute(data);
        // const result = await this.execute('python', ['src/parser/parser.py', JSON.stringify(data)]);
        return result.toString();
    }

    // execute(...command: any[]): Promise<any> {
    execute(data: Latex): Promise<any> {
        // let p = spawn(command[0], [command.slice(1)[0], command.slice(1)[1]]);
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
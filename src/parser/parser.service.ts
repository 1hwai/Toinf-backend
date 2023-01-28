import { Injectable, Logger } from '@nestjs/common';
import { Latex } from './Latex.dto';

@Injectable()
export class ParserService {
    private readonly logger = new Logger(ParserService.name);

    parse(data: Latex): string {
        const spawn = require('child_process').spawn;
        const pythonParserProcess = spawn('python', ['parser.py', JSON.stringify(data)]);

        let result:string = '';
        pythonParserProcess.stdout.on('data', data => {
            result = data;
        });

        return result;
    }
}

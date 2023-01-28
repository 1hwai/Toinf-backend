import { Injectable, Logger } from '@nestjs/common';
import { Latex } from './Latex.dto';

@Injectable()
export class ParserService {
    private readonly logger = new Logger(ParserService.name);

    parse(data: Latex): string {
        return data.content;
    }
}

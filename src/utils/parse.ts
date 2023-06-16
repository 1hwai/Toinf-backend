import {Latex} from "./Latex.dto";
import {spawn} from "child_process";
import {Logger} from "@nestjs/common";
import {DerivativeService} from "../derivative/derivative.service";

export default function execute(data: Latex): Promise<any> {
    const logger = new Logger(DerivativeService.name);
    const p = spawn('python', ['src/utils/parser.py', JSON.stringify(data.content)])
    return new Promise((resolve) => {
        p.stdout.on("data", res => {
            resolve(res.toString())
            if (res.toString() === '') {
                logger.warn('Error: parser result is null');
            }
        });
        p.stderr.on("data", x => {
            logger.warn('Error: Failed to parse.' + x.toString());
        });
    });
}
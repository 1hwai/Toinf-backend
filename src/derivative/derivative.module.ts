import {Module} from "@nestjs/common";
import {DerivativeController} from "./derivative.controller";
import {DerivativeService} from "./derivative.service";

@Module({
    imports: [],
    controllers: [DerivativeController],
    providers: [DerivativeService],
})
export class DerivativeModule {}
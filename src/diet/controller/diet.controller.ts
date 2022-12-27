import { Controller, Get } from '@nestjs/common';
import { DietService } from '../service/diet.service';

@Controller()
export class DietController {
    constructor(
        private readonly dietService: DietService,
    ) {}
}

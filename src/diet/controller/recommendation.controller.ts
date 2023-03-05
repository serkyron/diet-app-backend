import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { ResponseDto } from "../dto/response.dto";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { RecommendationService } from "../service/recommendation.service";
import { Recommendation } from "../entity/recommendation.entity";
import { RecommendationDto } from "../dto/recommendation.dto";
import { UpdateRecommendationDto } from "../dto/update.recommendation.dto";

@Controller({
    path: 'recommendation',
})
export class RecommendationController {
    constructor(
        private readonly recommendationService: RecommendationService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('/')
    public async list(): Promise<ResponseDto<Recommendation>> {
        const recommendations = await this.recommendationService.getAll();

        return new ResponseDto<Recommendation>(recommendations);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/')
    public async create(@Body() dto: RecommendationDto): Promise<ResponseDto<Recommendation>> {
        const recommendation = await this.recommendationService.create(dto);

        return new ResponseDto<Recommendation>([recommendation]);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<ResponseDto<Recommendation>> {
        await this.recommendationService.delete(id);

        return new ResponseDto<Recommendation>([]);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    public async update(@Param('id') id: number, @Body() dto: RecommendationDto): Promise<ResponseDto<Recommendation>> {
        const recommendation = await this.recommendationService.update(id, dto);
        const data = recommendation ? [recommendation] : [];

        return new ResponseDto<Recommendation>(data);
    }
}

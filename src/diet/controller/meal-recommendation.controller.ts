import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { ResponseDto } from "../dto/response.dto";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { RecommendationDto } from "../dto/recommendation.dto";
import { MealRecommendation } from "../entity/meal-recommendation.entity";
import { MealRecommendationService } from "../service/meal-recommendation.service";

@Controller({
    path: 'meal-recommendation',
})
export class MealRecommendationController {
    constructor(
        private readonly recommendationService: MealRecommendationService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('/')
    public async list(): Promise<ResponseDto<MealRecommendation>> {
        const recommendations = await this.recommendationService.getAll();

        return new ResponseDto<MealRecommendation>(recommendations);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/')
    public async create(@Body() dto: RecommendationDto): Promise<ResponseDto<MealRecommendation>> {
        const recommendation = await this.recommendationService.create(dto);

        return new ResponseDto<MealRecommendation>([recommendation]);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<ResponseDto<MealRecommendation>> {
        await this.recommendationService.delete(id);

        return new ResponseDto<MealRecommendation>([]);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    public async update(@Param('id') id: number, @Body() dto: RecommendationDto): Promise<ResponseDto<MealRecommendation>> {
        const recommendation = await this.recommendationService.update(id, dto);
        const data = recommendation ? [recommendation] : [];

        return new ResponseDto<MealRecommendation>(data);
    }
}

import * as Dotenv from "dotenv";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import * as bodyParser from "body-parser";

Dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        validationError: {
            target: false,
            value: false,
        },
        forbidUnknownValues: true,

    }));
    app.use(bodyParser.json({limit: "50mb"}));
    app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

    app.use((req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });

    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
    });

    await app.listen(parseInt(process.env.PORT || "3000", 10));
}

bootstrap();

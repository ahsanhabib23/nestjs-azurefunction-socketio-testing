import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function createApp(): Promise<INestApplication> {
	const app = await NestFactory.create(AppModule, { cors: true });
	app.setGlobalPrefix('api');
	/**
	 * Configuring CORS.
	 * this has been configured to allow frontend ionic project.
	 * any frontend urls need to be allowed here.
	 */
	const whitelist = ['http://localhost:8100'];
	const corsOptions = {
		origin: (origin, callback) => {
			console.log('origin', origin);
			if (whitelist.indexOf(origin) !== -1 || !origin) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		credentials: true,
	};
	console.log(whitelist);
	app.enableCors(corsOptions);
	await app.init();
	return app;
}

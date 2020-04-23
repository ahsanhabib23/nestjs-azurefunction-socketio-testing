import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import {Server, Socket} from 'socket.io';

@WebSocketGateway()
export class StreamDataGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
	constructor() {
		this.logger.log('StreamDataGateway Created !!!');
	}

	private logger: Logger = new Logger('StreamDataGateway');
	@WebSocketServer() wss: Server;

	afterInit(server: any) {
		this.logger.log('Initialize StreamDataGateway!');
	}

	handleConnection(client: Socket, ...args: any[]) {
		this.logger.log(`Client connected: ${client.id}`);
	}

	handleDisconnect(client: Socket) {
		this.logger.log(`Client disconnected: ${client.id}`);
	}

	@SubscribeMessage('sendEvent')
	handleMessage(client: any, payload: any) {
		client.emit('receiveEvent', payload);
	}
}

import { Test, TestingModule } from '@nestjs/testing';
import { StreamDataGateway } from './stream-data.gateway';

describe('StreamDataGateway', () => {
  let gateway: StreamDataGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamDataGateway],
    }).compile();

    gateway = module.get<StreamDataGateway>(StreamDataGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

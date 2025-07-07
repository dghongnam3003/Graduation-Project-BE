import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: VERSION_NEUTRAL,
})
export class AppController {
  @Get('/healthcheck')
  health() {
    return { status: 'ok' };
  }

  @Get('/v1/health')
  v1Health() {
    return { status: 'ok' };
  }

  @Get('/')
  root() {
    return {
      message: 'Welcome to PumpFund API',
      version: '1.0.0',
      status: 'running',
    };
  }

  @Get('/wiki')
  wiki() {
    return {
      message: 'PumpFund API Documentation',
      docs: '/doc',
      health: '/healthcheck',
    };
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('matches')
export class MatchesController {
  @Get()
  getMatches() {
    return {
      message: 'Matches service ready',
      items: [],
      source: 'demo',
      updatedAt: new Date().toISOString(),
    };
  }
}

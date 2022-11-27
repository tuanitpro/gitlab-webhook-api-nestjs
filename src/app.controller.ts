import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { Response } from 'express';

@Controller('gitlab')
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly telegramService: TelegramService) {}

  @Post('incoming')
  async incoming(@Body() obj: JSON, @Res() response: Response): Promise<any> {
    if (obj['object_kind'] === 'pipeline') {
      this.logger.log('incoming');
      const project = obj['project']['name'];
      const status = obj['object_attributes']['status']
      
     const result = await this.telegramService.sendMessage(`${project} BUILD_${status}`.toUpperCase());

      return response.status(200).json(result);
    }
    return response.status(200).json('Done');
  }
}

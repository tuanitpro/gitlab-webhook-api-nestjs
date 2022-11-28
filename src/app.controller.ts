import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { Response } from 'express';
import { GitlabPipelineModel } from './models/gitlab-pipeline.model';

@Controller('gitlab')
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly telegramService: TelegramService) {}

  @Post('incoming')
  async incoming(
    @Body() payload: GitlabPipelineModel,
    @Res() response: Response,
  ): Promise<any> {
    if (payload.object_kind === 'pipeline') {
      this.logger.log('incoming');
      const project = payload.project.name;
      const status = payload.object_attributes.status;

      const result = await this.telegramService.sendMessage(
        `${project} BUILD_${status}`.toUpperCase(),
      );

      return response.status(200).json(result);
    }
    return response.status(200).json('Done');
  }
}

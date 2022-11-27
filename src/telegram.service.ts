import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);
  constructor(private readonly configService: ConfigService) {}

  async sendMessage(message: string): Promise<string> {
    try {
      const token = this.configService.get<string>('TELEGRAM_TOKEN');
      const chatId = this.configService.get<string>('TELEGRAM_CHATID');
      this.logger.log('sendMessage');
      const bot = new TelegramBot(token);
      await bot.sendMessage(chatId, message);
      return 'Sent';
    } catch (e) {
      this.logger.error(e);
      return 'Error';
    }
  }
}

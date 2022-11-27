import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TelegramService } from './telegram.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
  ],
  controllers: [AppController],
  providers: [TelegramService],
})
export class AppModule {}

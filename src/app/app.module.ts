import { Module } from '@nestjs/common';
import { SentryModule } from '@sentry/nestjs/setup';
import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';
import CampaignModule from '@/modules/campaign/campaign.module';

@Module({
  imports: [SentryModule.forRoot(), ScheduleModule.forRoot(), CampaignModule],
  controllers: [AppController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { CampaignService } from '@/modules/campaign/campaign.service';
import { CampaignController } from '@/modules/campaign/campaign.controller';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService],
  exports: [],
  imports: [PrismaModule],
})
export default class CampaignModule {}

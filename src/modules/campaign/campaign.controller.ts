import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CampaignService } from '@/modules/campaign/campaign.service';
@Controller('/campaign')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  async getCampaigns() {
    const listCampaign = await this.campaignService.getCampaigns();
    return {
      data: listCampaign,
      message: 'List of campaigns',
    };
  }

  @Get('/status')
  async getCampaignStatus() {
    const listCampaignStatus = await this.campaignService.getCampaignStatus();
    return {
      data: listCampaignStatus,
      message: 'List of campaign status',
    };
  }

  @Get('/token-status')
  async getCampaignTokenStatus() {
    const listCampaignTokenStatus = await this.campaignService.getCampaignTokenStatus();
    return {
      data: listCampaignTokenStatus,
      message: 'List of campaign token status',
    };
  }

  @Get('/details/:id')
  async getCampaignDetails(@Param('id') id: string) {
    const campaignDetails = await this.campaignService.getCampaignDetails(id);

    if (!campaignDetails) {
      throw new NotFoundException('Campaign not found');
    }

    return {
      data: campaignDetails,
      message: 'Campaign details retrieved successfully',
    };
  }
}

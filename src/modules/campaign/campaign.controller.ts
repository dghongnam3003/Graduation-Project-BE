import { Body, Controller, Get, NotFoundException, Param, Post, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { CampaignService } from '@/modules/campaign/campaign.service';
import { FileInterceptor } from '@nestjs/platform-express';
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

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadMetadata(@UploadedFile() file: Express.Multer.File, @Body() body: { name: string; description: string }) {
    // Validate that file exists
    if (!file) {
      throw new BadRequestException('File is required');
    }

    // Validate that file has buffer
    if (!file.buffer) {
      throw new BadRequestException('File buffer is empty');
    }

    // Validate required body parameters
    if (!body.name || !body.description) {
      throw new BadRequestException('Name and description are required');
    }

    const url = await this.campaignService.uploadMetadata({
      file: file.buffer,
      name: body.name,
      description: body.description,
    });

    return {
      data: { url },
      message: 'File uploaded successfully',
    };
  }
}

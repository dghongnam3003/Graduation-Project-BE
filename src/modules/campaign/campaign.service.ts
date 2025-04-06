import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '@/modules/prisma/prisma.repository';
import { Prisma } from '@prisma/client';
import { StringValidation } from 'zod';
import { config } from '@/config';
import { request } from 'http';

@Injectable()
export class CampaignService {
  constructor(private readonly prismaRepository: PrismaRepository) {}

  async getCampaigns() {
    return this.prismaRepository.campaign.findMany();
  }

  async getCampaignStatus() {
    return this.prismaRepository.addTokenPumpProcesses.findMany();
  }

  async getCampaignTokenStatus() {
    return this.prismaRepository.sellProgress.findMany();
  }

  async getCampaignDetails(id: string) {
    // Get campaign details
    const campaign = await this.prismaRepository.campaign.findUnique({
      where: {
        id,
      },
    });

    // Get campaign status from addTokenPumpProcess
    const status = await this.prismaRepository.addTokenPumpProcesses.findFirst({
      where: {
        campaignIndex: campaign.campaignIndex,
        creator: campaign.creator,
      },
    });

    // Get claimable amount from sellProgress
    const sellProgress = await this.prismaRepository.sellProgress.findFirst({
      where: {
        campaignIndex: campaign.campaignIndex,
        creator: campaign.creator,
      },
    });

    return {
      ...campaign,
      status: status?.status || null,
      claimableAmount: sellProgress?.claimable_amount || 0,
    };
  }
}

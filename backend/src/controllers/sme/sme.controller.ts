import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
} from '@nestjs/common';
import { CreateSmeDetailsDto } from 'src/dtos/create-sme-details.dto';
import { SmeDetailService } from 'src/services/sme-details.service';
import { SmeValidator } from 'src/validator/sme.validator';

@Controller('sme')
export class SmeController {
  constructor(
    private readonly smeDetailsService: SmeDetailService,
    private readonly smeValidator: SmeValidator,
  ) {}

  @Post('submit')
  submitForm(@Req() req) {
    let input = req.body;
    let createSmeDetailsDto: CreateSmeDetailsDto = {
      companyUEN: input.companyUEN,
      companyName: input.companyName,
      fullName: input.fullName,
      positionInCompany: input.positionInCompany,
      email: input.email,
      attachmentIds: input.attachmentIds.join(','),
      createdAt: new Date(),
      phoneNumber: input.phoneNumber,
    };
    this.smeValidator.validateCreateSme(createSmeDetailsDto);

    return this.smeDetailsService.create(createSmeDetailsDto);
  }

  @Get('/getAll')
  async getAll() {
    let details = await this.smeDetailsService.findAllSortedByCreatedAt('ASC');
    return {
      error: false,
      message: 'Fetched Data',
      data: details,
    };
  }
}

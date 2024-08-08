import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSmeDetailsDto } from 'src/dtos/create-sme-details.dto';

@Injectable()
export class SmeValidator {
  validateCreateSme(data: CreateSmeDetailsDto) {
    const uenRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!uenRegex.test(data.companyUEN)) {
      throw new BadRequestException('companyUEN is not valid');
    }
    const companyNameRegex = /^[A-Za-z0-9 ]{2,}$/;
    if (!companyNameRegex.test(data.companyName)) {
      throw new BadRequestException('companyName is not valid');
    }
    const fullNameRegex = /^[A-Za-z0-9 ]{2,}$/;
    if (!fullNameRegex.test(data.fullName)) {
      throw new BadRequestException('fullName is not valid');
    }
    const positionInCompanyRegex = /^[A-Za-z0-9 ]{2,}$/;
    if (!positionInCompanyRegex.test(data.positionInCompany)) {
      throw new BadRequestException('positionInCompany is not valid');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new BadRequestException('email is not valid');
    }
    const phoneNumberRegex = /^\d{8}$/;
    if (!phoneNumberRegex.test(data.phoneNumber)) {
      throw new BadRequestException('phoneNumber is not valid');
    }
    return true;
  }
}

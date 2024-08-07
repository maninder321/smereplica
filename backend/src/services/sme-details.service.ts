import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSmeDetailsDto } from 'src/dtos/create-sme-details.dto';
import { SmeDetail } from 'src/entities/sme-details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SmeDetailService {
  constructor(
    @InjectRepository(SmeDetail)
    private smeRepository: Repository<SmeDetail>,
  ) {}

  async create(dto: CreateSmeDetailsDto) {
    let attachment = await this.smeRepository.create(dto);
    return this.smeRepository.save(attachment);
  }

  async findAllSortedByCreatedAt(
    order: 'ASC' | 'DESC' = 'ASC',
  ): Promise<SmeDetail[]> {
    return this.smeRepository.find({
      order: {
        createdAt: order,
      },
    });
  }
}

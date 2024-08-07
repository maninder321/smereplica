import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmeDetail } from 'src/entities/sme-details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SmeDetailService {
  constructor(
    @InjectRepository(SmeDetail)
    private smeDetailsService: Repository<SmeDetail>,
  ) {}
  findAll(): Promise<SmeDetail[]> {
    return this.smeDetailsService.find();
  }
  findOne(id: number): Promise<SmeDetail | null> {
    return this.smeDetailsService.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.smeDetailsService.delete(id);
  }
}

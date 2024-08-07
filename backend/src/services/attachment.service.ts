import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAttachmentDto } from 'src/dtos/create-attachment.dto';
import { Attachment } from 'src/entities/attachment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttachmentService {
  constructor(
    @InjectRepository(Attachment)
    private attachmentRepository: Repository<Attachment>,
  ) {}

  async create(dto: CreateAttachmentDto) {
    let attachment = await this.attachmentRepository.create(dto);
    return this.attachmentRepository.save(attachment);
  }

  findAll(): Promise<Attachment[]> {
    return this.attachmentRepository.find();
  }

  findOne(id: number): Promise<Attachment | null> {
    return this.attachmentRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.attachmentRepository.delete(id);
  }
}

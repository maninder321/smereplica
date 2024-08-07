import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'attachments',
})
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  fileSize: string;

  @Column()
  createdAt: Date;
}

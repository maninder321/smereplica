import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'sme_details',
})
export class SmeDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyUEN: string;

  @Column()
  companyName: string;

  @Column()
  fullName: string;

  @Column()
  positionInCompany: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column('text')
  attachmentIds: string;

  @Column()
  createdAt: Date;
}

import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';

@Entity('students')
export class Students {
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  @BeforeInsert()
  generateId() {
    this.id = Math.floor(100000 + Math.random() * 900000); 
  }

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'varchar', length: 100, nullable: true })
  fullName: string;

  @Column({ type: 'bigint', unsigned: true })
  phone: number;
}

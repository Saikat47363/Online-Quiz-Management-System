import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Students } from './students.entity';

@Injectable()
export class studentsService {
  constructor(
    @InjectRepository(Students)
    private studentsRepo: Repository<Students>,
  ) {}

  async getstudents(): Promise<Students[]> {
    return await this.studentsRepo.find();
  }

  async getstudentsByNameandID(name: string, id: number): Promise<object> {
    return { name, id };
  }

  async getstudentsWithNullName(): Promise<Students[]> {
    return await this.studentsRepo.find({
      where: {
        fullName: IsNull(),
      },
    });
  }

  async addstudents(students: Partial<Students>): Promise<Students> {
    const student = this.studentsRepo.create(students);
    return await this.studentsRepo.save(student);
  }

  async deletestudents(id: number): Promise<string> {
    await this.studentsRepo.delete(id);
    return `Student with ID ${id} has been deleted`;
  }

  async editstudents(id: number, updatedData: Partial<Students>): Promise<string> {
    await this.studentsRepo.update(id, updatedData);
    return `Student with ID ${id} has been edited`;
  }
}

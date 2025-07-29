import { Injectable } from '@nestjs/common';
 
@Injectable()
export class AdminService {
  getAdmin(): string {
    return 'All Admin';
  }
 
  getAdminByNameandID(name: string, id: number): object {
    return { name: name, id: id };
  }
 
  addAdmin(admin: object): object {
    return admin;
  }
 
  deleteAdmin(id: number): string {
    return `Admin with ID ${id} has been deleted`;
  }
 
  editAdmin(id: number, updatedData: object): string {
    return `Admin with ID ${id} has been edited`;
  }
}
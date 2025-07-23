import { Injectable } from "@nestjs/common";

@Injectable()
export class studentsService{
    getstudents():string {
        return "All students";
    }
      getstudentsByNameandID(name:string,id:number): object{
        return {name:name,id:id}
    }
    addstudents(students:object):object{
        return students;
    }
    deletestudents(id: number): string {
        return `Student with ID ${id} has been deleted`;
    }

  
    editstudents(id: number, updatedData: object): string {
        return `Student with ID ${id} has been edited`;
    }


}
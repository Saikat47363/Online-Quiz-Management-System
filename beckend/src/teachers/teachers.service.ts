import { Injectable } from "@nestjs/common";

@Injectable()
export class teachersService{
    getteachers():string {
        return "All teachers";
    }
      getteachersByNameandID(name:string,id:number): object{
        return {name:name,id:id}
    }
    addteachers(teachers:object):object{
        return teachers;
    }

    deleteteachers(id: number): string {
        
        return `teacher with ID ${id} has been deleted`;
    }

    editteachers(id: number, updatedData: object): string {
       
        return `teacher with ID ${id} has been edited`;
    }
}
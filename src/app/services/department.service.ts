import { Injectable } from '@angular/core';
import { IDepartment } from '../interfaces/department.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentsData: IDepartment[] = [];

  constructor() { }

  getDepartments(): IDepartment[] {
    return [...this.departmentsData];
  }

  addNewDepartment(departmentObj: IDepartment): void {
    this.departmentsData.push(departmentObj);
  }

  removeDepartment(i: string): void {
    this.departmentsData = this.departmentsData.filter((dep: IDepartment) => dep.key !== i);
  }

  getDepartmentByKey(id: string): IDepartment {
    return this.departmentsData.find((dep: IDepartment) => dep.key === id);
  }

  updateDepartment(obj: IDepartment): void {
    const index = this.departmentsData.findIndex(dep => dep.key == obj.key);
    this.departmentsData[index] = obj;
  }

}

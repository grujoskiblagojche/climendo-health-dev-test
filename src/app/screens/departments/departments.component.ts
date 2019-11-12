import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { DepartmentService } from 'src/app/services/department.service';
import { IDepartment } from 'src/app/interfaces/department.interface';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  public readonly breadcrumbsConfig: string[] = ['Departments'];
  departments: IDepartment[] = [];
  filteredDepartments: IDepartment[] = [];

  searchForm = this.fb.group({ term: ['', Validators.required] });

  constructor(
    private departmentService: DepartmentService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fetchDepartments();
  }

  fetchDepartments(): void {
    this.departments = this.departmentService.getDepartments();
    this.filteredDepartments = this.departmentService.getDepartments();
  }

  onRemoveDepartment(key: string): void {
    this.departmentService.removeDepartment(key);
    this.fetchDepartments();
  }

  filterByValue(departmentsArray: IDepartment[], term: string): IDepartment[] {
    return departmentsArray.filter((depObj: IDepartment) => {
      return Object.keys(depObj).some(key => {
        if (typeof depObj[key] === 'string' ) {
          return depObj[key].includes(term);
        } else {
          const nestedObj = depObj[key]
          return Object.keys(nestedObj).some(o => {
            return nestedObj[o].includes(term);
          })
        }
      })
    })
  }

  onSubmit(): void {
    const searchOutput: IDepartment[] = this.filterByValue(this.departments ,this.searchForm.value.term);
    this.filteredDepartments = [...searchOutput];
  }

}

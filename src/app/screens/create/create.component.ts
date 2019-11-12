import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public readonly breadcrumbsConfig: string[] = ['Departments', 'Create'];

  createDepartmentForm = this.fb.group({
    title: ['', Validators.required],
    key: ['', Validators.required],
    contact: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
    })
  });

  constructor(
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  onSubmit(): void {
    this.departmentService.addNewDepartment({...this.createDepartmentForm.value});
    this.createDepartmentForm.reset();
    this.router.navigate(['/', 'departments']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { DepartmentService } from 'src/app/services/department.service';
import { IDepartment } from 'src/app/interfaces/department.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public readonly breadcrumbsConfig: string[] = ['Departments', 'Edit'];
  department: IDepartment;
  editDepartmentForm: any;

  constructor(
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const key = this.activatedRoute.snapshot.paramMap.get('id');
    this.department = this.departmentService.getDepartmentByKey(key);
    this.createForm();
  }

  createForm(): void {
    this.editDepartmentForm = this.fb.group({
      title: [this.department.title, Validators.required],
      key: [this.department.key, Validators.required],
      contact: this.fb.group({
        name: [this.department.contact.name, Validators.required],
        email: [this.department.contact.email, Validators.required],
        tel: [this.department.contact.tel, Validators.required],
      })
    });
  }

  onSubmit(): void {
    this.departmentService.updateDepartment({...this.editDepartmentForm.value});
    this.editDepartmentForm.reset();
    this.router.navigate(['/', 'departments']);
  }

}

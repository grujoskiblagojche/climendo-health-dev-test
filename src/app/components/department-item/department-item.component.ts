import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDepartment } from 'src/app/interfaces/department.interface';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss']
})
export class DepartmentItemComponent {
  @Input() config: IDepartment;
  @Output() deleteDepartment: EventEmitter<string> = new EventEmitter();
  isOpened = false;

  toggleSubNav(): void {
    this.isOpened = !this.isOpened;
  }

  delete(): void {
    this.deleteDepartment.emit(this.config.key);
  }

}

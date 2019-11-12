import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DepartmentService } from './services/department.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { DepartmentsComponent } from './screens/departments/departments.component';
import { CreateComponent } from './screens/create/create.component';
import { EditComponent } from './screens/edit/edit.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DepartmentItemComponent } from './components/department-item/department-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DepartmentsComponent,
    CreateComponent,
    EditComponent,
    BreadcrumbsComponent,
    DepartmentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

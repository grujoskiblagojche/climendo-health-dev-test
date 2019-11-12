import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentsComponent } from './screens/departments/departments.component';
import { CreateComponent } from './screens/create/create.component';
import { EditComponent } from './screens/edit/edit.component';

const routes: Routes = [
    { path: '', redirectTo: 'departments', pathMatch: 'full' },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: EditComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
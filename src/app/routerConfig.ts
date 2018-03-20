import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const appRoutes: Routes = [
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'index',
        component: IndexComponent
    }
];
import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { loginguardGuard } from './loginguard.guard';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
    {
        path: "landing", component: TestComponent,
        children: [
            {
                path: '',
                component: ChildComponent
            }
        ]
    },
    { path: "", component: LoginComponent, canActivate: [loginguardGuard] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

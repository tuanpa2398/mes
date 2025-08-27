import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { DefaultLayoutComponent } from './shared/components/layouts/default-layout/default-layout.component';
import { WoodDryingManagementComponent } from './modules/wood-drying-management/components/wood-drying-management/wood-drying-management.component';
import { authGuard, noAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: WoodDryingManagementComponent,
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [noAuthGuard]
    }
];

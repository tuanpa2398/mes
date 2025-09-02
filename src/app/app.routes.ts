import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { DefaultLayoutComponent } from './shared/components/layouts/default-layout/default-layout.component';
import { WoodDryingManagementComponent } from './modules/wood-drying-management/components/wood-drying-management/wood-drying-management.component';
import { authGuard, noAuthGuard } from './core/guards/auth.guard';
import { ServerNotResponseComponent } from './modules/error/components/server-not-response/server-not-response.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { CommonErrorComponent } from './modules/error/components/common/common-error/common-error.component';
import { UnauthorizeComponent } from './modules/error/components/unauthorize/unauthorize.component';
import { ForbiddenComponent } from './modules/error/components/forbidden/forbidden.component';
import { NotFoundComponent } from './modules/error/components/404/not-found/not-found.component';
import { ServerInternalErrorComponent } from './modules/error/components/server-internal-error/server-internal-error.component';
import { UserComponent } from './modules/user/components/user/user.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'quan-ly-say-go',
                component: WoodDryingManagementComponent,
            },
            {
                path: 'quan-ly-nguoi-dung',
                component: UserComponent,
            }
            
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [noAuthGuard]
    },
    {
        path: 'server-not-response',
        component: ServerNotResponseComponent
    },
    {
        path: 'error',
        component: CommonErrorComponent
    },
    {
        path: 'unauthorize',
        component: UnauthorizeComponent
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: 'server-internal-error',
        component: ServerInternalErrorComponent
    }
];

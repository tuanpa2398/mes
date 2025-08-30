import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingBarService } from '@app/services/loading-bar.service';
import { finalize } from 'rxjs/operators';

export const loadingBarInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingBarService = inject(LoadingBarService);
    loadingBarService.show();

    return next(req).pipe(
        finalize(() => loadingBarService.hide())
    );
};
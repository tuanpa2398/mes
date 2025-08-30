import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';
import { AuthService } from '@app/services/auth.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  let apiReq = req;

  // nếu url không bắt đầu bằng http thì thêm prefix api
  if (!req.url.startsWith('http')) {
    apiReq = apiReq.clone({ url: `${environment.apiUrl}${req.url}` });
  }

  const token = authService.getAccessToken();

  if (token) {
    apiReq = apiReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(apiReq);
};

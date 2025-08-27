import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  let apiReq = req;

  // nếu url không bắt đầu bằng http thì thêm prefix api
  if (!req.url.startsWith('http')) {
    apiReq = apiReq.clone({ url: `${environment.apiUrl}${req.url}` });
  }

  const token = localStorage.getItem('access_token');

  if (token) {
    apiReq = apiReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(apiReq);
};

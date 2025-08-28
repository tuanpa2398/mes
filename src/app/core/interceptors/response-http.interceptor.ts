import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { ToastService } from '@app/services/toast.service';
import { BAD_REQUEST_STATUS, UNAUTHORIZED_STATUS } from '@app/shared/constant';
import { catchError, throwError } from 'rxjs';

export const responseHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error:', error);

      if(error.status ==  UNAUTHORIZED_STATUS){
        if (error.error?.error === 'TOKEN_EXPIRED') {
          authService.refreshToken().subscribe((res: any) => {
            console.log(res);

            if(res.status == false){
              authService.logout();
              // redirect login
              router.navigate([`/login`]);
              return;
            }

            
          })
        }else{
          authService.logout();
          // redirect login
          router.navigate([`/login`]);
        }
      }else {
        toastService.error(error.message || "Có lỗi xảy ra");
      }

      return throwError(() => error);
    })
  );
};

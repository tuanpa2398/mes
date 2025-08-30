import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { ToastService } from '@app/services/toast.service';
import { BAD_REQUEST_STATUS, FORBIDDEN_STATUS, NOT_FOUND_STATUS, SERVER_INTERNAL_ERROR_STATUS, SERVICE_UNAVAILABLE_STATUS, UNAUTHORIZED_STATUS } from '@app/shared/constant';
import { catchError, throwError } from 'rxjs';

export const responseHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        // Lỗi kết nối, ERR_CONNECTION_REFUSED thường có status = 0
        router.navigate([`/server-not-response`])
      }

      if (error.status == UNAUTHORIZED_STATUS) {
        if (error.error?.error === 'TOKEN_EXPIRED') {
          authService.refreshToken().subscribe((res: any) => {
            if (res.status == false) {
              authService.logout();
              // redirect login
              router.navigate([`/login`]);
              return;
            }
          })
        } else {
          authService.logout();
          // redirect login
          router.navigate([`/login`]);
        }
      }

      if (error.status == SERVICE_UNAVAILABLE_STATUS) {
        toastService.error(error.message || "Server không hoạt động.");
      }

      if (error.status == BAD_REQUEST_STATUS) {
        toastService.error(error.message || "Dữ liệu không hợp lệ.");
      }

      if (error.status == FORBIDDEN_STATUS) {
        toastService.error("Từ chối truy cập.");
      }

      if (error.status == SERVER_INTERNAL_ERROR_STATUS) {
        toastService.error("Lỗi server. Vui lòng thử lại sau.");
      }

      if (error.status == NOT_FOUND_STATUS) {
        toastService.error("Không tồn tại tài nguyên đang truy cập.");
      }

      return throwError(() => error);
    })
  );
};

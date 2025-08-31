import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { ToastService } from '@app/services/toast.service';
import { BAD_REQUEST_STATUS, FORBIDDEN_STATUS, NOT_FOUND_STATUS, SERVER_INTERNAL_ERROR_STATUS, SERVICE_UNAVAILABLE_STATUS, UNAUTHORIZED_STATUS } from '@app/shared/constant';
import { EMPTY, catchError, switchMap, throwError } from 'rxjs';

export const responseHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        // Lỗi kết nối, ERR_CONNECTION_REFUSED thường có status = 0
        router.navigate([`/server-not-response`])
        return EMPTY;
      }

      if (error.status == UNAUTHORIZED_STATUS) {
        if (error.error?.error === 'TOKEN_EXPIRED') {
          return authService.refreshToken().pipe(
            switchMap((res: any) => {
              if (res.status == false) {
                authService.logout();
                router.navigate(['/login']);
                toastService.info("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
                return throwError(() => error);
              }
              
              return next(req.clone());
            }),
            catchError(() => {
              authService.logout();
              router.navigate(['/login']);
              toastService.info("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
              return throwError(() => error);
            })
          );
        } else {
          authService.logout();
          router.navigate([`/unauthorize`]);
          toastService.error("Từ chối truy cập. Vui lòng đăng nhập lại.");
          return throwError(() => error);
        }
      }

      if (error.status == SERVICE_UNAVAILABLE_STATUS) {
        toastService.error("Server không hoạt động. Vui lòng thử lại sau.");
        router.navigate([`/error`]);
        return EMPTY;
      }

      if (error.status == BAD_REQUEST_STATUS) {
        toastService.error("Dữ liệu không hợp lệ. Vui lòng thử lại.");
        return EMPTY;
      }

      if (error.status == FORBIDDEN_STATUS) {
        toastService.error("Không có quyền truy cập.");
        router.navigate([`/forbidden`]);
        return EMPTY;
      }

      if (error.status == SERVER_INTERNAL_ERROR_STATUS) {
        toastService.error("Lỗi server. Vui lòng thử lại sau.");
        router.navigate([`/error`]);
        return EMPTY;
      }

      if (error.status == NOT_FOUND_STATUS) {
        toastService.error("Không tồn tại tài nguyên đang truy cập.");
        router.navigate([`/error`]);
        return EMPTY;
      }

      return throwError(() => error);
    })
  );
};

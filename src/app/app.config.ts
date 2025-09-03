import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import lara from '@primeng/themes/lara';
import { httpInterceptor } from './core/interceptors/http.interceptor';
import { MessageService } from 'primeng/api';
import { responseHttpInterceptor } from './core/interceptors/response-http.interceptor';
import { loadingBarInterceptor } from './core/interceptors/LoadingBarInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        httpInterceptor,
        responseHttpInterceptor,
        loadingBarInterceptor
      ])
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: lara
      }
    }),
    MessageService
  ],
};

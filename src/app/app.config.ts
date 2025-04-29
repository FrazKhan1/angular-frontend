import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      tapToDismiss: false,
    }),
  ],
};

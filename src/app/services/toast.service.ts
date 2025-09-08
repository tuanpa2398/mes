import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    duration: number = 3000;

    severity = {
        success: 'success',
        error: 'error', 
        info: 'info',
        warn: 'warn',
        danger: 'danger',
        secondary: 'secondary'
    }

    constructor(
        private messageService: MessageService
    ) { }

    info(message: string) {
        this.messageService.add({ 
            severity: this.severity.info, 
            detail: message, life: this.duration,
            closable: false,
            closeIcon: ''
        });
    }

    error(message: string) {
        this.messageService.add({ 
            severity: this.severity.error, 
            detail: message, life: this.duration,
            closable: false,
            closeIcon: '',
        });
    }

    success(message: string) {
        this.messageService.add({ 
            severity: this.severity.success, 
            detail: message, life: this.duration ,
            closable: false,
            closeIcon: ''
        });
    }
}

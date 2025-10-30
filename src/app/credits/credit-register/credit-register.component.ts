import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CreditService } from '../../core/credit.service';
import { MessageService } from '../../core/message.service';

@Component({
  selector: 'app-credit-register',
  templateUrl: './credit-register.component.html'
})
export class CreditRegisterComponent {
  model = {
    customerName: '',
    customerIdNumber: '',
    amount: 0,
    interestRate: 2,
    termMonths: 12
  };

  constructor(private creditService: CreditService, private router: Router, private messageService : MessageService) {}

  register() {
    this.creditService.register(this.model).subscribe({
      next: () => {
        this.messageService.addMessage({summary:"Credito registrado correctamente",severity:"success"})
        this.router.navigate(['/credits']);
      },
      error: (err) => {
        this.messageService.addMessage({summary:"No se pudo registrar el credito",severity:"error"})
      }
    });
  }
}

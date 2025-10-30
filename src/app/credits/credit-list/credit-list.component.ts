import { Component, OnInit } from '@angular/core';
import { CreditService } from '../../core/credit.service';
import { Credit } from '../../models/Credit';


@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.scss']
})
export class CreditListComponent implements OnInit {

  credits: Credit[] = [];
  filteredCredits: Credit[] = [];
  filter: string = '';

  constructor(private creditService: CreditService) {}

  ngOnInit(): void {
    this.loadCredits();
  }

  loadCredits() {
    this.creditService.getAll().subscribe({
      next: (data :any) => {
        this.credits = data;
        this.filteredCredits = [...this.credits];
      },
      error: (err) => console.error(err)
    });
  }

  filterCredits() {
    const search = this.filter.toLowerCase();
    this.filteredCredits = this.credits.filter(c =>
      c.customerName.toLowerCase().includes(search) ||
      c.customerIdNumber.toLowerCase().includes(search) ||
      c.commercialName.toLowerCase().includes(search)
    );
  }
}

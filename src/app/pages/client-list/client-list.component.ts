import {Component, inject, OnInit} from '@angular/core';
import {ClientListService} from '../services/client-list.service';
import {Partner, PartnerLevel} from '../../shared/interfaces/card-list-response.interface';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ClientCardComponent} from '../../shared/client-card/client-card.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    FormsModule,
    MatIconButton,
    MatIcon,
    MatLabel,
    MatSuffix,
    NgIf,
    MatProgressSpinner,
    ClientCardComponent
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {
  protected filters: PartnerLevel[] = [];
  protected partners: Partner[] = [];
  protected searchQuery: string = '';
  protected filteredPartners: Partner[] = [];
  private readonly clientSerivce = inject(ClientListService);
  private readonly router = inject(Router);

  constructor() {
  }

  ngOnInit(): void {
    this.clientSerivce.getList()
      .subscribe((data) => {
        this.filters = data.partner_levels;
        this.partners = data.partners;
        this.filteredPartners = [...this.partners];
      });
  }

  clearSearch() {
    this.searchQuery = '';
  }

  onSearch(): void {
    console.log('Search query:', this.searchQuery);
  }

  onFilterClick(filterName: string) {
    this.filteredPartners = this.partners.filter((data: Partner) => data.partner_level_name === filterName);
  }

  onShowAll(): void {
    this.filteredPartners = [...this.partners];
  }

  navigate(id: any): void {
    this.router.navigate(['/', id]).then();
  }
}

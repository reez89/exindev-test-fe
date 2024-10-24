import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientListService} from '../services/client-list.service';
import {ItemDetailResponseInterface} from '../../shared/interfaces/item-detail-response.interface';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Location} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatProgressSpinner
  ],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent implements OnInit {
  private partnerId: string = '';
  private readonly route = inject(ActivatedRoute);
  private readonly clientService = inject(ClientListService);
  protected partnerDetail!: ItemDetailResponseInterface;
  private readonly location = inject(Location)

  constructor() {
  }

  ngOnInit(): void {
    this.partnerId = this.route.snapshot.paramMap.get('id') || '';
    this.clientService.getItem(this.partnerId)
      .subscribe((data) => {
        this.partnerDetail = data;
      });
  }

  goBack(): void {
    this.location.back(); // Torna alla pagina precedente
  }
}

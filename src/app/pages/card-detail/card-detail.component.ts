import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientListService} from '../services/client-list.service';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent implements OnInit {
  partnerId: string = '';
  private readonly route = inject(ActivatedRoute);
  private readonly clientService = inject(ClientListService);

  constructor() {
  }

  ngOnInit(): void {
    this.partnerId = this.route.snapshot.paramMap.get('id') || '';
    this.clientService.getItem(this.partnerId).subscribe();
  }
}

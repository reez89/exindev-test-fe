import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {ClientListService} from '../../pages/services/client-list.service';
import {CardInterface} from '../interfaces/card.interface';
import {MatCard} from '@angular/material/card';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {MatChip} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [
    MatCard,
    NgStyle,
    NgOptimizedImage,
    MatChip,
    MatIcon
  ],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss'
})
export class ClientCardComponent implements OnInit {
  @Input({required: true}) cards!: CardInterface;
  @Output() navigate = new EventEmitter<any>()
  private readonly clientSerivce = inject(ClientListService);
  private router = inject(Router)
  constructor() {
  }

  ngOnInit(): void {
  }


  // core : #EEF4FF
  // gold : #FFFAEB
  // silver : lightgrey
  // core plus : Blue light

  getColor(type: string): string {
    switch (type.toLowerCase()) {
      case 'core':
        return '#EEF4FF';
      case 'gold':
        return '#FFFAEB';
      case 'silver':
        return 'lightgrey';
      case 'core plus':
        return 'lightblue'; // Puoi personalizzare la tonalità di "Blue light" se necessario
      default:
        return '#FFFFFF'; // Colore di default (bianco) se non corrisponde nessun valore
    }
  }


  navigateToProfile(id: any) : void {
    this.navigate.emit(id)
    console.log('hello')

  }


}

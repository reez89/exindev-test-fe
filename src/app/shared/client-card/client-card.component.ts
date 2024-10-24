import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardInterface} from '../interfaces/card.interface';
import {MatCard} from '@angular/material/card';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {MatChip} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';

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
export class ClientCardComponent {
  @Input({required: true}) cards!: CardInterface;
  @Output() navigate = new EventEmitter<any>();

  getColor(type: string): string {
    switch (type.toLowerCase()) {
      case 'core':
        return '#EEF4FF';
      case 'gold':
        return '#FFFAEB';
      case 'silver':
        return 'lightgrey';
      case 'core plus':
        return 'lightblue';
      default:
        return '#FFFFFF';
    }
  }

  navigateToProfile(id: any): void {
    this.navigate.emit(id);
  }
}

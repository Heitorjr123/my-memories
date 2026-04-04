import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faHeart,
  faLightbulb,
  faQuoteLeft,
  faThumbtack,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-memory',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './memory.html',
  styleUrl: './memory.css',
})
export class Memory {
  @Input() id: number = 0;
  @Input() title: string = 'Minha Memória';
  @Input() description: string = 'Descrição da memória...';
  @Input() color: string = '#fffd91';
  @Input() date: Date = new Date();
  @Input() user: string = 'Usuário Anônimo';
  @Input() type: string = 'lembrete';

  getTypeIcon() {
    switch (this.type) {
      case 'lembrete':
        return faBell;
      case 'motivacao':
        return faQuoteLeft;
      case 'lembranca':
        return faHeart;
      case 'ideia':
        return faLightbulb;
      default:
        return faThumbtack;
    }
  }
}

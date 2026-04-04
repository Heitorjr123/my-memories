import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memory',
  imports: [],
  templateUrl: './memory.html',
  styleUrl: './memory.css',
})
export class Memory {
  @Input() id: number = 0;
  @Input() title: string = 'Minha Memória';
  @Input() description: string = 'Descrição da memória...';
  @Input() color: string = '#fffd91';
  @Input() date: string = '03/04/2026';
  @Input() imageUrl: string = 'https://example.com/memory-image.jpg';
  @Input() user: string = 'Usuário Anônimo';
}

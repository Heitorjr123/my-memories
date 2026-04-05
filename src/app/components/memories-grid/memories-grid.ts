import { MemoryService } from './../../services/memory.service';
import { Component, inject, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router, RouterLink } from '@angular/router';
import { Memory } from '../../models/memory.model';
import { Memory as MemoryComponent } from '../memory/memory';

@Component({
  selector: 'app-memories-grid',
  imports: [MemoryComponent, FontAwesomeModule, DragDropModule, RouterLink],
  templateUrl: './memories-grid.html',
  styleUrl: './memories-grid.css',
})
export class MemoriesGrid {
  constructor(private memoryService: MemoryService) {}
  private router = inject(Router);

  @Input() memories: Memory[] = [];
  plusIcon = faPlus;

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.memories, event.previousIndex, event.currentIndex);
  }

  editar(id: string | undefined) {
    console.log('ID que chegou no método editar:', id);

    if (!id || id === '0') {
      this.router.navigate(['/memory', '0']);
    } else {
      this.router.navigate(['/memory', id]);
    }
  }

  excluir(id: string) {
    if (confirm('Deseja realmente excluir esta memória?')) {
      this.memoryService.deleteMemory(id).subscribe({
        next: () => {
          this.memories = this.memories.filter((m) => m.id !== id);
        },
        error: (err: any) => console.error('Erro ao excluir:', err),
      });
    }
  }
}

import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { RouterLink } from '@angular/router';
import { Memory } from '../../models/memory.model';
import { Memory as MemoryComponent } from '../memory/memory';
@Component({
  selector: 'app-memories-grid',
  imports: [MemoryComponent, FontAwesomeModule, DragDropModule, RouterLink],
  templateUrl: './memories-grid.html',
  styleUrl: './memories-grid.css',
})
export class MemoriesGrid {
  constructor() {}

  @Input() memories: Memory[] = [];
  plusIcon = faPlus;

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.memories, event.previousIndex, event.currentIndex);
  }

  addMemory(): void {}
}

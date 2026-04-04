import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MemoriesGrid } from '../../components/memories-grid/memories-grid';
import { MemoryService } from '../../services/memory.service';
import { Memory } from '../../models/memory.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MemoriesGrid],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  constructor(
    private memoryService: MemoryService,
    private cdr: ChangeDetectorRef,
  ) {}
  memories: Memory[] = [];

  ngOnInit() {
    this.loadMemories();
  }

  loadMemories() {
    this.memoryService.getMemories().subscribe({
      next: (dados: Memory[]) => {
        this.memories = [...dados];
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }
}

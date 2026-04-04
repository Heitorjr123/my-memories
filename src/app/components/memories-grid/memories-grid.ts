import { Component } from '@angular/core';
import { Memory } from '../memory/memory';
import { Memories } from '../../data/memories';

@Component({
  selector: 'app-memories-grid',
  imports: [Memory],
  templateUrl: './memories-grid.html',
  styleUrl: './memories-grid.css',
})
export class MemoriesGrid {
  memories = Memories;
}

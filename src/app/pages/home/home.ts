import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';
import { MemoriesGrid } from '../../components/memories-grid/memories-grid';

@Component({
  selector: 'app-home',
  imports: [MenuBar, MemoriesGrid],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

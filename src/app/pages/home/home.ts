import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';

@Component({
  selector: 'app-home',
  imports: [MenuBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

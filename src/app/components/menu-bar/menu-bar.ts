import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar',
  imports: [FontAwesomeModule],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar {
  barras = faBars;
  search = faSearch;
  user = faUser;
}

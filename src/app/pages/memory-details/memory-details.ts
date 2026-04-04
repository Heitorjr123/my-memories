import { MemoryService } from './../../services/memory.service';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  faBell,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faLightbulb,
  faQuoteLeft,
  faSave,
  faThumbtack,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-memory-details',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './memory-details.html',
  styleUrl: './memory-details.css',
})
export class MemoryDetails {
  constructor(private memoryService: MemoryService) {}

  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  saveIcon = faSave;
  faXmark = faXmark;
  faBell = faBell;
  faHeart = faHeart;
  faQuoteLeft = faQuoteLeft;
  faLightbulb = faLightbulb;
  faThumbtack = faThumbtack;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  formulario = {
    id: 0,
    title: '',
    description: '',
    color: '#fffd91',
    date: new Date(),
    type: 'lembrete',
    user: '',
  };

  @ViewChild('carousel') carousel!: ElementRef;

  moveCarousel(direction: number) {
    if (this.carousel) {
      const scrollAmount = 200;
      this.carousel.nativeElement.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  salvarMemoria(): void {
    const { id, ...dadosParaEnvio } = this.formulario;
    this.memoryService.createMemory(dadosParaEnvio).subscribe({
      next: () => {
        this.snackBar.open('✨ Memória guardada com sucesso!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.resetForm();
        this.router.navigate(['/']);
      },
      error: () => {
        this.snackBar.open('❌ Ops! Verifique se o servidor está ligado.', 'Entendido');
      },
    });
  }

  close(): void {
    this.router.navigate(['/']);
  }

  resetForm() {
    this.formulario = {
      id: 0,
      title: '',
      description: '',
      color: '#fffd91',
      date: new Date(),
      type: 'lembrete',
      user: '',
    };
  }
}

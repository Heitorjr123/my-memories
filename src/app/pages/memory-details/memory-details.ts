import { MemoryService } from './../../services/memory.service';
import { Component, ElementRef, inject, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
import { Memory } from '../../models/memory.model';

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
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  saveIcon = faSave;
  faXmark = faXmark;
  faBell = faBell;
  faHeart = faHeart;
  faQuoteLeft = faQuoteLeft;
  faLightbulb = faLightbulb;
  faThumbtack = faThumbtack;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  formulario: Memory = {
    id: undefined,
    title: '',
    description: '',
    color: '#fffd91',
    date: new Date(),
    type: 'lembrete',
    user: '',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id && id !== '0') {
      this.memoryService.getMemoryById(id).subscribe({
        next: (dados: any) => {
          this.formulario = { ...dados, date: new Date(dados.date) };
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro na API:', err);
        },
      });
    }
  }

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
    if (this.formulario.id && this.formulario.id !== '0') {
      this.memoryService.updateMemory(this.formulario.id, this.formulario).subscribe({
        next: () => {
          this.snackBar.open('✅ Memória atualizada!', 'OK', { duration: 3000 });
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Erro ao atualizar:', err),
      });
    } else {
      const { id, ...novoRegistro } = this.formulario;
      this.memoryService.createMemory(novoRegistro).subscribe({
        next: () => {
          this.snackBar.open('✨ Memória criada!', 'OK', { duration: 3000 });
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Erro ao criar:', err),
      });
    }
  }

  close(): void {
    this.router.navigate(['/']);
  }

  resetForm() {
    this.formulario = {
      id: undefined,
      title: '',
      description: '',
      color: '#fffd91',
      date: new Date(),
      type: 'lembrete',
      user: '',
    };
  }
}

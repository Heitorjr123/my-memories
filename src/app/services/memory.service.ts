import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Memory } from '../models/memory.model';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  private apiUrl = 'http://localhost:5054/mymemories';

  constructor(private http: HttpClient) {}

  getMemories(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.apiUrl);
  }

  createMemory(memory: Memory): Observable<Memory> {
    return this.http.post<Memory>(this.apiUrl, memory);
  }

  updateMemory(id: string, memory: Memory): Observable<Memory> {
    return this.http.put<Memory>(`${this.apiUrl}/${id}`, memory);
  }

  deleteMemory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMemoryById(id: string): Observable<Memory> {
    return this.http.get<Memory>(`${this.apiUrl}/${id}`);
  }
}

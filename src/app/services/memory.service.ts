import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Memory } from '../models/memory.model';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  private apiUrl = 'http://localhost:5243/memories';

  constructor(private http: HttpClient) {}

  getMemories(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.apiUrl);
  }

  createMemory(memory: Memory): Observable<Memory> {
    return this.http.post<Memory>(this.apiUrl, memory);
  }
}

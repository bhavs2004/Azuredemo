import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Tasks{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = `${environment.apiBase}/Tasks`;

  constructor(private http: HttpClient){}

  getTasks(): Observable<Tasks[]>{
    return this.http.get<Tasks[]>(this.baseUrl);
  }

  getTasksById(id: number): Observable<Tasks> {
  return this.http.get<Tasks>(`${this.baseUrl}/${id}`);
}
createTask(tasks: Tasks): Observable<Tasks> {
  return this.http.post<Tasks>(this.baseUrl, tasks);
}


UpdateTask(id: number, tasks: Tasks): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/${id}`, tasks);
}

deleteTask(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}

}

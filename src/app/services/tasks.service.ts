import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TasksService {
  private http;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getTasks(): Observable<any> {
    return this.http.get("http://localhost:4004/tasks/");
  }

  getMembers(): Observable<any> {
    return this.http.get("http://localhost:4004/tasks/family-members");
  }

  addTodo(task): Observable<any> {
    return this.http.put("http://localhost:4004/tasks", task);
  }

  deleteTodo(id): Observable<any> {
    return this.http.delete(`http://localhost:4004/tasks/${id}`);
  }
}

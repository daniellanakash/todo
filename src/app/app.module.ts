import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";

@NgModule({
  declarations: [AppComponent, TasksComponent, AddTodoComponent],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: TasksComponent },
      { path: "add-todo", component: AddTodoComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

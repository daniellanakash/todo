import { Component, OnInit } from "@angular/core";
import { TasksService } from "../services/tasks.service";
import { ActivatedRoute, Router } from "@angular/router";
import dayjs from "dayjs";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  private service;
  private myRouter: ActivatedRoute;
  private router: Router;
  tasks: Array<any>;
  id: number;

  constructor(service: TasksService, myRouter: ActivatedRoute, router: Router) {
    this.service = service;
    this.myRouter = myRouter;
    this.router = router;
    this.tasks = [];
    this.id = null;
  }

  onClick() {
    this.router.navigate(["/add-todo"]);
  }

  getTasks() {
    this.service.getTasks().subscribe(
      data => {
        this.tasks = data.map(task => ({
          ...task,
          date: dayjs(task.date).format("DD-MM-YYYY")
        }));
      },
      err => console.log(err)
    );
  }

  deleteTask(id) {
    this.id = id;
    this.service.deleteTodo(this.id).subscribe(
      () => {
        this.getTasks();
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.getTasks();
  }
}

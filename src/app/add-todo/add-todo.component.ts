import { Component, OnInit } from "@angular/core";
import { TasksService } from "../services/tasks.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class AddTodoComponent implements OnInit {
  private service;
  membersData: Array<any>;
  description: string;
  member: string;
  private myRouter: ActivatedRoute;
  private router: Router;

  constructor(service: TasksService, myRouter: ActivatedRoute, router: Router) {
    this.service = service;
    this.membersData = [];
    this.myRouter = myRouter;
    this.router = router;
    this.description = "";
    this.member = "";
  }

  createTodo() {
    const { description, member } = this;
    return {
      description,
      member
    };
  }

  emptyInputs() {
    this.description = "";
    this.member = "";
  }

  addTask() {
    console.log(this.createTodo());
    this.service.addTodo(this.createTodo()).subscribe(
      () => {
        this.emptyInputs();
        this.router.navigate(["/"]);
      },
      err => console.log(err)
    );
  }

  getMembers() {
    this.service.getMembers().subscribe(
      data => {
        this.membersData = data;
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.getMembers();
  }
}

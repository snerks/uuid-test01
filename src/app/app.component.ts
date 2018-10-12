import { Component, OnInit } from "@angular/core";
// import uuid = require("uuid");
import { v1, v4 } from "uuid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  uuidV1: string;
  uuidV4: string;

  ngOnInit() {
    this.getNewGuids();
  }

  getNewGuids() {
    this.getNewGuidV1();
    this.getNewGuidV4();
  }

  getNewGuidV1() {
    this.uuidV1 = v1();
  }

  getNewGuidV4() {
    this.uuidV4 = v4();
  }
}

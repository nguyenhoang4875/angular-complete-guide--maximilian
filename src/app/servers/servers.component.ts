import { Component, OnInit } from "@angular/core";

@Component({
  // selector option 1
  selector: "app-servers",

  // selector option 2
  //selector: "[app-servers]",

  // selector option 3
  // selector: '.app-servers',

  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

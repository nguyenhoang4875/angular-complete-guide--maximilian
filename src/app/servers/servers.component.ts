import { Component, OnInit } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

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
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Test Server";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = "Server was created! is " + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

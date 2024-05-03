import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  // <!-- propirity binding -->
  allowNewServer = false;
  //////////////////////////////
  serverCreationStatus = 'no server was created!';
  serverName = 'testServer';
  serverCreate = false;
  servers=['testServer1','testServer2']

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateSever() {
    this.serverCreate = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus =
      'this server is create! Name is ' + this.serverName;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}

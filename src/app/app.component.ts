import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [];
  message = '';
  onAddCockpit(serverData: { serverName: string; serverContent: string }) {
    if (!serverData.serverName && !serverData.serverContent) {
      this.message = 'Please Enter Valid Details'
    } else {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent,
      });
    }
  }
  onBlueprintadded(serverData: { serverName: string; serverContent: string }) {
    if (!serverData.serverName && !serverData.serverContent) {
      this.message = 'Please Enter Valid Details'
    } else {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent,
      });
    }
  }
}

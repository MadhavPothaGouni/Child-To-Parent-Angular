import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  // disabled = false;
  private appimport = inject(AppComponent)
  @Output() onAddappcockpit = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blurprintadded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = '';
  newServerContent = '';
  savedValues = this.appimport.serverElements;

  onAddServer() {
    this.onAddappcockpit.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
    this.newServerName='';
    this.newServerContent=''
  }

  onAddBlueprint() {
    this.blurprintadded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
    this.newServerName='';
    this.newServerContent=''
  }
  
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html', 
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() onAddappcockpit = new EventEmitter<{serverName: string, serverContent: string}>
  @Output() blurprintadded = new EventEmitter<{serverName: string, serverContent: string}>
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.onAddappcockpit.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  } 

  onAddBlueprint() {
    this.blurprintadded.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }
}

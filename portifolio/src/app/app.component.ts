import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portifólio';
  ehLigth : boolean = false;

  receiveEvent($event: boolean){
    this.ehLigth = $event
  }
}

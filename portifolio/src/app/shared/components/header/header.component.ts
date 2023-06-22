import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ehLight: boolean = false;

  constructor(){}

  switchForLight(){
    document.body.classList.toggle('light');
    this.ehLight =!this.ehLight;
  }


}

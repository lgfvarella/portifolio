import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() ehLight = new EventEmitter<boolean>();
  alternando:boolean = false;

  constructor(){}

  switchForLight(){
    this.alternando = !this.alternando
    this.ehLight.emit(this.alternando);
  }


}

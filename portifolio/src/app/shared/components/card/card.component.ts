import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() card = {
    name:"",
    description:"",
    html_url:"",
    homepage:"",
  }
  showMyContainer: boolean = false;

  constructor(){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  toggleShow(status:boolean){
    this.showMyContainer = status
  }
}

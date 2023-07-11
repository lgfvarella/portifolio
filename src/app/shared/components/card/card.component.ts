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
  urlImg:string = ``
  showMyContainer: boolean = false;

  constructor(){}


  ngOnInit(): void {
    this.urlImg = `../assets/${this.card.name}.png`
  }

  toggleShow(status:boolean){
    this.showMyContainer = status
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() ehLight: boolean = false;

  ngOnInit(): void {

  }

  toTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  toTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}

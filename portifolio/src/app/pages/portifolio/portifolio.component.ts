import { Component, OnInit } from '@angular/core';
import { Portifolio } from 'src/app/shared/interfaces/portifolio';
import { PortifolioService } from 'src/app/shared/services/portifolio.service';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  projetosList: Portifolio[] = [];

  constructor(private service: PortifolioService){}

  ngOnInit(): void {
    this.service.listar().subscribe((projetosList) =>{
      console.log(projetosList)
      this.projetosList = projetosList;
    })
  }
}

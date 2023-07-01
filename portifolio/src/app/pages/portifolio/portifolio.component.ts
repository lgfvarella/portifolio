import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  projetosList = [
    {
      title:"Portifólio Version-1",
      description:"Angular, Typescrypt, HTML5, CSS3, Bootstrap",
      githubLink:"https://www.google.com/",
      projectLink:"https://www.cnn.com/",
      imagem:"../../../assets/potifolioImg.png"
    },
    {
      title:"teste 02",
      description:"teste desc 02",
      githubLink:"",
      projectLink:"",
      imagem:"../../../assets/twitch.png"
    },
    {
      title:"teste 03",
      description:"teste desc 03",
      githubLink:"",
      projectLink:"",
      imagem:""
    },
    {
      title:"teste 04",
      description:"teste desc 04",
      githubLink:"",
      projectLink:"",
      imagem:""
    },
    {
      title:"teste 05",
      description:"teste desc 05",
      githubLink:"",
      projectLink:"",
      imagem:""
    },
  ];

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


}

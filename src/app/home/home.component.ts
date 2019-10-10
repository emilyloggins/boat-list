import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked = false;

  handleClick() {
    this.clicked = true;
  }

  boats = [
    {
    name: 'Big Mama',
    year: '1969',
    img: '../../img/download.jpg'
  },
  {
    name: 'The Girthy Gertrude',
    year: '420',
    img: '../../img/download.jpg'
  },
  {
    name: 'Can\'t Believe it\'s not Butter!',
    year: '666666',
    img: '../../img/download.jpg'
  }
]
  constructor() { }
  ngOnInit() {
  }

}

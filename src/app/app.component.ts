import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  sampleList:any[] = [];
  divderCount:number = 2;
  isPercent:boolean = true;
  constructor(){
    this.sampleList  = [
      {
        "_id": "5976a13f6653386837489bb2",
        "index": 0,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Gross Casey"
      },
      {
        "_id": "5976a13f0941fa1842865e88",
        "index": 1,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Nash Bruce"
      },
      {
        "_id": "5976a13f8364ee70b2b5555e",
        "index": 2,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": "Melba Estrada"
      },
      {
        "_id": "5976a13fab2cdc560a39a7cc",
        "index": 3,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Cheri Mosley"
      },
      {
        "_id": "5976a13f8790d513716e168e",
        "index": 4,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": "Ofelia Aguirre"
      },
      {
        "_id": "5976a13fce491181e33b0686",
        "index": 5,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": "Juliette Booth"
      }
    ]
  }
}

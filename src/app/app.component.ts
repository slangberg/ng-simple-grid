import { Component } from '@angular/core';
import { IColConfig, IGridStyle, IClassConfig} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  sampleList:any[] = [];
  divderCount:number = 2;
  isPercent:boolean = true;
  usingColConfig:boolean = false;
  usingGridStyle:boolean = false;
  usingColStyle:boolean = false;
  usingRowStyle:boolean = false;
  usingClassConfig:boolean = false;
  sampleColConfig:IColConfig[] = [];
  sampleGridStyle:IGridStyle = {};
  sampleClassConfig:IClassConfig = null;
  sampleColStyle:Object = {}
  sampleRowStyle:Object = {}
  activeConfigs:any = null;
  sampleConfigObject: any;
  menuOpen:boolean = false;
  constructor(){
    this.setUpConfigs();
    this.sampleList  = [
      {
        "_id": "5976a13f665",
        "index": 0,
        "picture": "https://slangberg.github.io/ng-simple-grid/assets/demo-1.jpeg",
        "age": 38,
        "name": "Gross Casey"
      },
      {
        "_id": "5976a13f0941",
        "index": 1,
        "picture": "https://slangberg.github.io/ng-simple-grid/assets/demo-2.jpeg",
        "age": 37,
        "name": "Nash Bruce"
      },
      {
        "_id": "54egsfgfs",
        "index": 2,
        "picture": "https://slangberg.github.io/ng-simple-grid/assets/demo-1.jpeg",
        "age": 31,
        "name": "Melba Estrada"
      },
      {
        "_id": "5976a13fab2cdc560a39a7cc",
        "index": 3,
        "picture": "https://slangberg.github.io/ng-simple-grid/assets/demo-2.jpeg",
        "age": 21,
        "name": "Cheri Mosley"
      },
      {
        "_id": "5976a13f8790d513716e168e",
        "index": 4,
        "picture": "https://slangberg.github.io/ng-simple-grid/assets/demo-1.jpeg",
        "age": 28,
        "name": "Ofelia Aguirre"
      },
      {
        "_id": "5976a13fce491181e33b0686",
        "index": 5,
        "picture": "https://slangberg.github.io/ng-simple-grid/assets/demo-2.jpeg",
        "age": 28,
        "name": "Juliette Booth"
      }
    ]
  }

  toggleMenu = () => {
    this.menuOpen = this.menuOpen = !this.menuOpen;
  }


  setUpConfigs = () => {
    this.sampleConfigObject = {
    colConfig:[],
    gridStyle:{},
    classConfig:null,
    colStyle:{},
    rowStyle:{}
    }

    this.activeConfigs = JSON.stringify(this.sampleConfigObject)
  }

  usesGridStyle = () => {
    if(!this.usingGridStyle){
      this.sampleConfigObject.gridStyle =  {
        colStyle:{padding:'10px', border:'1px solid purple'},
        rowStyle:{'padding':'10px'}
      }
    }
    else {
      this.sampleConfigObject.gridStyle = {};
    }
  }

  useSampleColStyle = () => {
    if(!this.usingColStyle){
      this.sampleConfigObject.colStyle =  {
        padding:'20px',
        border:'2px solid green'
      }
    }
    else {
      this.sampleConfigObject.colStyle = {};
    }
  }

  useClassConfig = () => {
    if(!this.usingClassConfig){
      this.sampleConfigObject.classConfig =  {
        container:['simple-grid-container','border-container'],
        row:['simple-grid-row','opacity-row']
      }
    }
    else {
      this.sampleConfigObject.classConfig = null;
    }
  }

  useSampleRowStyle = () => {
    if(!this.usingRowStyle){
      this.sampleConfigObject.rowStyle =  {
        padding:'20px',
        border:'2px solid Blue'
      }
    }
    else {
      this.sampleConfigObject.rowStyle = {};
    }
  }

  usesColConfig = () => {
    if(!this.usingColConfig){
      this.divderCount = 2;
      this.sampleConfigObject.colConfig = [
        {
          class:'border-yellow',
          percent:33.3333
        },
        {
          class:'border-purple',
          percent:66.6666
        }
      ]
    }
    else {
      this.sampleConfigObject.colConfig = []
    }
  }

  onClickItem = (data:{item:any, index: number}) => {
    console.log(data)
    alert(`Item Index: ${data.index}`)
  }

}

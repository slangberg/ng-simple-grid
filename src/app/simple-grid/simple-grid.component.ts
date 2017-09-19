import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ContentChild,ContentChildren, TemplateRef, ViewChild, ViewChildren,QueryList  } from '@angular/core';
import {defaultConfig,bootstrapConfig} from "../class-configs"
import {IColConfig, IClassConfig, IGridStyle} from '../interfaces';

@Component({
  selector: 'simple-grid',
  templateUrl: './simple-grid.component.html',
  styleUrls: ['./simple-grid.component.scss']
})
export class SimpleGridComponent implements OnChanges {
  @ContentChild(TemplateRef) templ;
  @Input('source-list') listArray: any[] = [];
  @Input('col-count') divider : number = 1;
  @Input('use-percent') usePercentage : boolean = true;
  @Input('col-config') colConfig : IColConfig[] = [];
  @Input('classes-config') classesConfigInput : IClassConfig = null;
  @Input('ui-kit') kit : string = null;
  @Input('grid-style-config') gridStyle : IGridStyle = {};
  @Input('col-style') colStyle : Object = {};
  @Input('row-style') rowStyle : Object = {};
  @Input('container-style') containerStyle : Object = {};
  @Output() onItemClick = new EventEmitter<any>();
  colConfigTemple:any;
  dividerClass:string = null;
  colArray: any[] = null;
  classConfig: IClassConfig;
  lastRow: number = 0;
  percentWidth:number = 0;
  constructor(
  ) {
    this.setUp()
  }

  ngOnChanges() {
    this.genColArray();
  }

  ngDoCheck() {
    this.setUp();
  }

  ngAfterViewInit(){
    this.setColTemplateVar();
  }

  setColTemplateVar = () => {

  }

  itemClicked = (item:any,index:number) => {
    this.onItemClick.emit({item:item,index:index});
  }

  getColStyle = (index:number) => {
    let colConfig = this.colArray[index] || {}
    let curColStyle = {};
    if(this.usePercentage){
      if(colConfig.percent){
        curColStyle['width'] = colConfig.percent+"%"
      }
      else {
        curColStyle['width'] = this.percentWidth+"%"
      }
    }
    if(this.gridStyle && this.gridStyle.colStyle){
      curColStyle = Object.assign(curColStyle, this.gridStyle.colStyle);
    }

    if(this.colStyle){
      curColStyle = Object.assign(curColStyle, this.colStyle);
    }

    if(colConfig.style){
      curColStyle = Object.assign(curColStyle, colConfig.style);
    }

    return curColStyle;
  }

  getColClasses = (index:number) => {
    let classArray = [];
    classArray = this.genStringArray(classArray,this.classConfig.col);
    let colConfig = this.colArray[index] || {};

    if(colConfig.class) {
      classArray = this.genStringArray(classArray,colConfig.class)
    }
    return classArray;
  }

  getRowClasses = (index:number) => {
    let classArray = []
    classArray = this.genStringArray(classArray,this.classConfig.row);
    return classArray;
  }

  getRowStyle  = (index:number) => {
    let rowStyle = {}
    if(this.gridStyle && this.gridStyle.rowStyle){
      rowStyle = Object.assign(rowStyle, this.gridStyle.rowStyle);
    }
    if(this.rowStyle){
      rowStyle = Object.assign(rowStyle, this.rowStyle);
    }
    return rowStyle;
  }

  genTemplate = (index:number) => {

    // let colConfig = this.colArray[index] || {}
    // let template;
    // if(colConfig.template){
    //
    //   template = colConfig.template;
    // }
    // // else if(this.defaultTemple){
    // //   template = this.defaultTemple;
    // // }
    // else if(this.templ) {
    //   template = this.templ
    // }
    // else {
    //   console.error("No Vaild Column Template")
    //   return false;
    // }
    return this.templ;
  }

  genColArray = () => {
    if(this.colConfig.length && this.colConfig.length == this.divider){
      this.colArray = this.colConfig;
    }
    else if (this.colConfig.length &&  this.colConfig.length !== this.divider) {
      console.error("Invalid col-config")
    }
    else {
      this.colArray = Array(this.divider).fill({});
    }
  }

  setUp = () => {
    this.classSetup();
    this.genColArray();
    if(this.usePercentage){
      this.percentWidth = 100/this.divider;
    }
  }

  genStringArray = (source:string[],input:string[]|string) : string[] => {
    if(typeof input === 'string'){
      source.push(input);
    }
    else{
      source = source.concat(input);
    }
    return source;
  }

  classSetup = () => {
    if(this.classesConfigInput){
      this.classConfig =  Object.assign(this.classConfig, this.classesConfigInput);
    }
    else {
      this.classConfig = Object.assign({}, defaultConfig);
    }
  }
}

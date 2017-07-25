import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ContentChild,TemplateRef  } from '@angular/core';

@Component({
  selector: 'grid-output',
  templateUrl: './grid-output.component.html',
  styleUrls: ['./grid-output.component.scss']
})
export class GridOutputComponent implements OnChanges {
  @ContentChild(TemplateRef) templ;
  @Input('gridlist') listArray: any[] = [];
  @Input('divider') divider : number = 1;
  @Input('percentage') percentage : boolean = false;
  @Input('dividerClasses') classLookUpArray : string[] = [];
  dividerLookup:string[] = ['full','half','third','fourth','fifth','sixth','seventh','eigth','ninth','tenth','eleventh','twelth'];
  dividerClass:string = null;
  colArray: any[] = null;
  lastRow: number = 0;
  percentWidth:number = 0;
  colClasses:string[] = ['grid-col'];
  colStyle:Object = {}
  constructor(
  ) {

  }

  ngOnChanges() {
    this.colArray = Array(this.divider).fill(0);
  }

  ngDoCheck() {
    if(this.percentage){
      this.percentWidth = 100/this.divider;
      this.colClasses = ['grid-col'];
      this.colStyle = {width:this.percentWidth+"%"};
    }
    else {
      if(this.classLookUpArray.length){
        this.dividerLookup = this.classLookUpArray;
      }
      this.percentWidth = 0;
      this.colClasses = ['grid-col',this.dividerLookup[this.divider-1]];
      this.colStyle = {};
    }

    let totalRows = Math.floor(this.listArray.length/this.divider);
    if(!totalRows){
      this.lastRow = 0
    }
    else {
      this.lastRow = totalRows*this.divider;
    }
  }

}

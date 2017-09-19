import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sample-cell',
  templateUrl: './sample-cell.component.html',
  styleUrls: ['./sample-cell.component.scss']
})
export class SampleCellComponent implements OnInit {
  @Input() item: any = {};
  constructor() { }

  ngOnInit() {
  }

}

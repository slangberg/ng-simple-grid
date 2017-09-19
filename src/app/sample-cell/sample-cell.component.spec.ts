import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCellComponent } from './sample-cell.component';

describe('SampleCellComponent', () => {
  let component: SampleCellComponent;
  let fixture: ComponentFixture<SampleCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

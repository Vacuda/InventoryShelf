import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveRowComponent } from './receive-row.component';

describe('ReceiveRowComponent', () => {
  let component: ReceiveRowComponent;
  let fixture: ComponentFixture<ReceiveRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

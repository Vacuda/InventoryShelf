import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePageComponent } from './receive-page.component';

describe('ReceivePageComponent', () => {
  let component: ReceivePageComponent;
  let fixture: ComponentFixture<ReceivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

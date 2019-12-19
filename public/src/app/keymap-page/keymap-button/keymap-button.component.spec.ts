import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeymapButtonComponent } from './keymap-button.component';

describe('KeymapButtonComponent', () => {
  let component: KeymapButtonComponent;
  let fixture: ComponentFixture<KeymapButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeymapButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeymapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

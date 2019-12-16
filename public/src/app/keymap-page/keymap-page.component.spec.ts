import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeymapPageComponent } from './keymap-page.component';

describe('KeymapPageComponent', () => {
  let component: KeymapPageComponent;
  let fixture: ComponentFixture<KeymapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeymapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeymapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

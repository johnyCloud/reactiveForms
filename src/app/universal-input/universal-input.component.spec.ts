import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalInputComponent } from './universal-input.component';

describe('UniversalInputComponent', () => {
  let component: UniversalInputComponent;
  let fixture: ComponentFixture<UniversalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

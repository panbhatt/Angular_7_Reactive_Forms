import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveloginComponent } from './reactivelogin.component';

describe('ReactiveloginComponent', () => {
  let component: ReactiveloginComponent;
  let fixture: ComponentFixture<ReactiveloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

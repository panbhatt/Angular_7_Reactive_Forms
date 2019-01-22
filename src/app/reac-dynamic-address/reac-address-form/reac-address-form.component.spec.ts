import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacAddressFormComponent } from './reac-address-form.component';

describe('ReacAddressFormComponent', () => {
  let component: ReacAddressFormComponent;
  let fixture: ComponentFixture<ReacAddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacAddressFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

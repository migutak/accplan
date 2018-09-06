import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtpComponent } from './ptp.component';

describe('PtpComponent', () => {
  let component: PtpComponent;
  let fixture: ComponentFixture<PtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

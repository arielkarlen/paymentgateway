import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPaymentComponent } from './content-payment.component';

describe('ContentPaymentComponent', () => {
  let component: ContentPaymentComponent;
  let fixture: ComponentFixture<ContentPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPaymentComponent]
    });
    fixture = TestBed.createComponent(ContentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

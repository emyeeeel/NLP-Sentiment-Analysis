import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentInputComponent } from './sentiment-input.component';

describe('SentimentInputComponent', () => {
  let component: SentimentInputComponent;
  let fixture: ComponentFixture<SentimentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentimentInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

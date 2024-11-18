import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyQuestionsComponent } from './frequency-questions.component';

describe('FrequencyQuestionsComponent', () => {
  let component: FrequencyQuestionsComponent;
  let fixture: ComponentFixture<FrequencyQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequencyQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequencyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

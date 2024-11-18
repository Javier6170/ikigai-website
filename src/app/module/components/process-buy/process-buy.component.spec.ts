import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessBuyComponent } from './process-buy.component';

describe('ProcessBuyComponent', () => {
  let component: ProcessBuyComponent;
  let fixture: ComponentFixture<ProcessBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessBuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

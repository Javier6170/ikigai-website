import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticDataInformationComponent } from './politic-data-information.component';

describe('PoliticDataInformationComponent', () => {
  let component: PoliticDataInformationComponent;
  let fixture: ComponentFixture<PoliticDataInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticDataInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticDataInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

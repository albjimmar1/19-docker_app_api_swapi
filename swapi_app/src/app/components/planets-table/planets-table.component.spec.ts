import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsTableComponent } from './planets-table.component';

describe('PlanetsTableComponent', () => {
  let component: PlanetsTableComponent;
  let fixture: ComponentFixture<PlanetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

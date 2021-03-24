import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSelectComponent } from './exam-select.component';

describe('ExamSelectComponent', () => {
  let component: ExamSelectComponent;
  let fixture: ComponentFixture<ExamSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

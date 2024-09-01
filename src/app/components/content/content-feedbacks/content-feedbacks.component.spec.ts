import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFeedbacksComponent } from './content-feedbacks.component';

describe('ContentFeedbacksComponent', () => {
  let component: ContentFeedbacksComponent;
  let fixture: ComponentFixture<ContentFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentFeedbacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

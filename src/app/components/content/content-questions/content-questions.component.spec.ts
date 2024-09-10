import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentQuestionsComponent } from './content-questions.component';

describe('ContentQuestionsComponent', () => {
  let component: ContentQuestionsComponent;
  let fixture: ComponentFixture<ContentQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

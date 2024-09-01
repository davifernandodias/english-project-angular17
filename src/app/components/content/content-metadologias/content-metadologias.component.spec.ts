import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMetadologiasComponent } from './content-metadologias.component';

describe('ContentMetadologiasComponent', () => {
  let component: ContentMetadologiasComponent;
  let fixture: ComponentFixture<ContentMetadologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMetadologiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentMetadologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

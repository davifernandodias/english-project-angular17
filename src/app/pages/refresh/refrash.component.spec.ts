import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrashComponent } from './refrash.component';

describe('LoginComponent', () => {
  let component: RefrashComponent;
  let fixture: ComponentFixture<RefrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefrashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
